// Sanitize that special characters of HTML tags cause XSS issue
import { BaseChannel } from '@sendbird/chat';
import { NodeNames, NodeTypes } from './const';
import { USER_MENTION_TEMP_CHAR } from '../../modules/GroupChannel/context/const';

/**
 * - Converts `<` and `>` characters to their HTML entities (`&#60;` and `&#62;`).
 * - All other characters (including special symbols, emojis, and non-English text) remain unchanged.
 */
export const sanitizeString = (str: string = ''): string => {
  if (!str) return '';
  return str.replace(/[<>]/g, (char) => (char === '<' ? '&#60;' : '&#62;'));
};

/**
 * NodeList cannot be used with Array methods
 * @param {NodeListOf<ChildNode>} childNodes
 * @returns Array of child nodes
 */
export const nodeListToArray = (childNodes?: Node['childNodes'] | null) => {
  return childNodes ? Array.from(childNodes) : [];
};

export function isChannelTypeSupportsMultipleFilesMessage(channel: BaseChannel) {
  return channel && channel.isGroupChannel?.() && !channel.isBroadcast && !channel.isSuper;
}

// Type guard: This function ensures that the node contains `innerText` and `dataset` properties
function isHTMLElement(node: ChildNode): node is HTMLElement {
  return node.nodeType === NodeTypes.ElementNode;
}

// eslint-disable-next-line no-undef
export function extractTextAndMentions(childNodes: NodeListOf<ChildNode>) {
  let messageText = '';
  let mentionTemplate = '';
  childNodes.forEach((node) => {
    if (isHTMLElement(node) && node.nodeName === NodeNames.Span) {
      const { innerText, dataset = {} } = node;
      const { userid = '' } = dataset;
      messageText += innerText;
      mentionTemplate += `${USER_MENTION_TEMP_CHAR}{${userid}}`;
    } else if (isHTMLElement(node) && node.nodeName === NodeNames.Br) {
      messageText += '\n';
      mentionTemplate += '\n';
    } else if (isHTMLElement(node) && node.nodeName === NodeNames.Div) {
      const { textContent = '' } = node;
      messageText += `\n${textContent}`;
      mentionTemplate += `\n${textContent}`;
    } else {
      const { textContent = '' } = node;
      messageText += textContent;
      mentionTemplate += textContent;
    }
  });
  return { messageText, mentionTemplate };
}
