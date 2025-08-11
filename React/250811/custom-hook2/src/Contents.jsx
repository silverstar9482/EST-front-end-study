import { useLang } from './Hook/UseLang.js';

function Content() {
  const { greeting, description } = useLang().currentLanguage;
  return (
    <div>
      <p>{greeting}</p>
      <p>{description}</p>
    </div>
  );
}

export default Content;
