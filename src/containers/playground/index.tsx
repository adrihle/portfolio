'use client'
import { Text } from '@/components';

const Playground = () => {
  return (
    <div style={{ margin: '50px' }}>
      <Text.Title type='h1'>title 1</Text.Title>
      <Text.Title type='h2'>title 2</Text.Title>
      <p>We use <abbr title="HyperText Markup Language">HTML</abbr> to structure web pages.</p>
      <Text>This text was <del>removed</del> and <ins>added</ins>.</Text>
      <p>This text is <mark>highlighted</mark>.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <ol>
        <li>First Step</li>
        <li>Second Step</li>
      </ol>
      <p>This is <em>emphasized</em> text.</p>
      <p>E=mc<sup>2</sup></p>
      <p>H<sub>2</sub>O</p>
      <p>She said, <q>Hello, world!</q></p>
      <p><cite>The Great Gatsby</cite> by F. Scott Fitzgerald</p>
    </div>
  );
};

export default Playground;
