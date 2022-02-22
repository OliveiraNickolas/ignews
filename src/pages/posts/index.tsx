import Head  from 'next/head';

import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
        <Head>
            <title>Posts | Ignews </title>
        </Head>

        <main className={styles.conteiner}>
            <div className={styles.posts}>
                <a>
                    <time>21 de fevereiro de 2022</time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                    <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                </a>
                <a>
                    <time>21 de fevereiro de 2022</time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                    <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                </a>
                <a>
                    <time>21 de fevereiro de 2022</time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                    <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                </a>
                <a>
                    <time>21 de fevereiro de 2022</time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                    <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                </a>
            </div>
        </main>
        </>
    );
}