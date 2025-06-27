import { getConfigValue } from '../../scripts/configs.js';
export default async function decorate(block) {
  const readConfig = await getConfigValue('get-value');
  const [quoteWrapper] = block.children;
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}