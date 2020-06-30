import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Greetings, I'm Timothy Lee Long but please call me Tim. I'm a software
					engineer, an audio engineer, and a musician. I enjoy traveling,
					engrossment in profound thought, absorption, contemplation,
					reflection, meditation, abstraction, problem solving, mastering chosen
					subjects, designing and carrying out strategic plans, and pushing the
					limits. ;)
				</p>
				<p>
					(I created this blog with <a href='https://nextjs.org'>Next.js</a>.)
				</p>
			</section>
		</Layout>
	);
}
