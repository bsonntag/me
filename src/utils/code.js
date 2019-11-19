import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';

export function highlightCode(code, language) {
  return Prism.highlight(code, Prism.languages[language]);
}
