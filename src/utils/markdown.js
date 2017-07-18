import Remarkable from 'remarkable';

const md = new Remarkable();

export const mdToHtml = (text) => (
    md.render(text)
)
