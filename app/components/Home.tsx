import React from 'react';
import { Link } from 'react-router-dom';
import { useAsBind } from 'use-as-bind';

import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  const wasm = useAsBind('my-wasm.wasm');
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      {wasm.loaded && wasm.instance.exports.addString('hello', 'wasm')}
      {wasm.error && wasm.error.message}
      <Link to={routes.COUNTER}>to Counter</Link>
    </div>
  );
}
