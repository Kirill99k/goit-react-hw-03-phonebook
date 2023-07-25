export const font = ({ fs, fw }) => `
  font-size: ${fs ? `${fs}px` : '16px'};
  font-weight: ${fw ? fw : 500};`;

export const flex = ({ fw, ai, jc }) => ` 
display: flex;
flex-wrap: ${fw ? fw : 'no-wrap'};
align-items:${ai ? ai : 'center'};
justify-content:${jc ? jc : 'center'};
  `;
