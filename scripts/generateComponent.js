/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
const fs = require('fs');

const generateIndexFile = (filePath, componentName) => {
  const indexFileContents = `export * from "./${componentName}.stories";
export * from "./${componentName}";
`;
  fs.writeFileSync(`${filePath}/index.ts`, indexFileContents, 'utf8');
};

const generateStoryFile = (filePath, atomicComponentType, componentName) => {
  const lowercaseComponentName = `${componentName
    .charAt(0)
    .toLowerCase()}${componentName.slice(1)}`;
  const uppercaseAtomicComponentType = `${atomicComponentType
    .charAt(0)
    .toUpperCase()}${atomicComponentType.slice(1)}s`;
  const storyFileContents = `import React from "react";
import { ${componentName}, I${componentName} } from "./index";

export default {
  title: \"${uppercaseAtomicComponentType}/${componentName}",
};

export const get${componentName}Args = () => ({});
const Template: Story\<\I${componentName}\> = (args) => \<${componentName} {...args} \/\>;
export const ${lowercaseComponentName} = Template.bind({});
${lowercaseComponentName}.args = get${componentName}Args();
`;
  fs.writeFileSync(
    `${filePath}/${componentName}.stories.tsx`,
    storyFileContents,
    'utf8',
  );
};

const generateComponentFile = (filePath, componentName) => {
  const componentFileContents = `import React, { ReactElement } from "react";
import styled from "styled-components";

export interface I${componentName} extends React.HTMLAttributes<HTMLDivElement> {}

export const ${componentName}: React.FC\<\I${componentName}\> = (
  {
    ...props
  }
): ReactElement => {
  return (
    <S${componentName}Container {...props}>
    </S${componentName}Container>
  );
};

const S${componentName}Container = styled.div\`\`;
`;
  fs.writeFileSync(
    `${filePath}/${componentName}.tsx`,
    componentFileContents,
    'utf8',
  );
};

const generateComponentSet = () => {
  // 0 is the environment (node) & 1 is the path + Script Name (scripts/generateComponent.js)
  const atomicComponentType = process.argv[2];
  const componentName = process.argv[3];
  const isStoryFileNeeded = process.argv[4];
  const atomicComponentTypeSet = ['atom', 'molecule', 'organism', 'template'];
  if (atomicComponentTypeSet.includes(atomicComponentType)) {
    console.log('Component Name: ', componentName);
    const folderPath = `components/${atomicComponentType}s/${componentName}`;
    console.log(folderPath);
    fs.mkdirSync(folderPath);
    generateComponentFile(folderPath, componentName);
    if (isStoryFileNeeded === 'noStory' || isStoryFileNeeded === '--noStory') {
      console.log('No Story will be generated');
    } else {
      generateStoryFile(folderPath, atomicComponentType, componentName);
    }
    generateIndexFile(folderPath, componentName);
  } else {
    console.log(
      `First Argument must be of [atom, molecule, organism, template] , ${atomicComponentType}`,
    );
  }
};

generateComponentSet();
