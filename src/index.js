import './index.css'
import Helmet from 'preact-helmet'
import copyToClipboard from './copyToClipboard'

export default function App() {
	return (
		<>
			<Helmet 
				script={[
					{ defer: true, src: 'https://platform-api.sharethis.com/js/sharethis.js#property=623222622d10e5001932a789&product=sop', type: "text/javascript" },
					{ defer: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-QQV97F1V5G&l=dataLayer&cx=c', type: 'text/javascript' },
				]}
				link={[
					{ rel: "icon", href: 'favicon.ico', type: 'image/png' }
				]}
			/>
			<header>
				<div class="protect_elem">
					<div>Protect Ukraine</div>
					<div>NOW</div>
				</div>
				<div class="container">
					<div class="soc_net">
						<a href="https://twitter.com/protectUKRnow" target="_blank">
							<i class="fa-brands fa-twitter"></i>
						</a>
						<a href="https://www.instagram.com/protectukrainenow" target="_blank">
							<i class="fa-brands fa-instagram"></i>
						</a>
						<a href="mailto:protectukrainenow@gmail.com" target="_blank">
							<i class="fa-solid fa-envelope"></i>
						</a>
					</div>
				</div>
			</header>

			<section class="main">
				<div class="container">
					<h1>Request your representative to release</h1>
					<h2>Soviet-made fighter jets to Ukraine</h2>
					<a href="#usebot">ACT NOW</a>
				</div>
			</section>

			<div className="container">
				<section className="parts_sec">
					<div className="name">
						There are 2 ways to get in touch with your representatives:
					</div>
					<div className="part part1" id="usebot">
						<div className="left_part">
							<div className="title">
								<span>1</span>
								<span>Use chat bot to initiate petition to your representative</span>
							</div>
							<div className="content">
								<p>How to do that?</p>
								<ul>
									<li>
										<p>1. Click this button if you use iOS (MacOS) or Android</p>
										<a href="https://resist.bot/petitions/PDRQYD" target="_blank" rel="noreferrer">USE CHAT BOT</a>
									</li>
									<li>
										<p>2. If you have Twitter account you can request your representative through chat bot there</p>
										<a href="https://twitter.com/messages/compose?recipient_id=835740314006511618&text=sign%20PDRQYD" target="_blank" rel="noreferrer">USE TWITTER</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="right_part">
							<div className="video_el"><iframe width={461} height={240} src="https://www.youtube.com/embed/j1Uml7lV_HA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
							<p>Quick Help Video</p>
						</div>
					</div>
					<div className="border_block">
					<span>or</span>
					</div>
					<div className="part part2" id="sendletter">
						<div className="left_part">
							<div className="title">
								<span>2</span>
								<span>Send the letter to your representative</span>
							</div>
							<div className="content">
								<p>How to do that?</p>
								<ul>
									<li>1. Find your representative in U.S. Congress following this link
										<a href="https://www.congress.gov/members/find-your-member" target="_blank" rel="noreferrer">www.congress.gov/members/find-your-member</a>
									</li>
									<li>2. Follow your representative website link</li>
									<li>3. Send the <a href="#emailbody">email</a> using Contact US form</li>
								</ul>
							</div>
						</div>
						<div className="right_part">
							<div className="video_el"><iframe width={461} height={240} src="https://www.youtube.com/embed/nJZG6xwQ8Pw" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
							<p>Quick Help Video</p>
						</div>
					</div>
				</section>
				<section className="social_sec">
					<h3>After you are done please share this site with your friends, family and on social networks</h3>
					<div className="social_buttons">
						<div className="sharethis-inline-share-buttons" />
					</div>
					<div className="save_block">
						<div>Together we can save</div>
						<div>Ukrainian lives!</div>
						<div className="flag">
							<div className="blue" />
							<div className="yellow" />
						</div>
					</div>
				</section>
				<section className="letter_sec" id="emailbody">
					<div className="title">Send the following letter to your representative in U.S. Congress</div>
					<div className="letter_text">
					<div className="greet">
						Dear [name of the representative],
					</div>
					<br />
					<div>
						Today I am urgently asking you to actively support immediate delivery of Eastern European fighter planes to Ukraine.
						The brave Ukrainian army and the country�s heroic citizens are winning the war on the ground.
						The problem is that Ukrainian cities are being destroyed and citizens are being murdered from the air.
						I am requesting your urgent help in convincing the White House that immediate delivery of MIG planes to Ukraine should be the highest priority in support of a free Ukraine.
						What we are witnessing is a genocide against the Ukrainian people. 
						We have an ability in this country and allied bases in Europe to stop these murderous attacks from the air.
						We have a moral obligation to do so. 
						Our words are meant to reinforce President Zelenskyy's urgent demands for fighter planes.
						Ukrainian cities are lying in ruins and thousands of civilians are dead and will keep dying because Ukraine is denied fighter jets.
						<b>
							These planes are defensive, NOT offensive weapons: they will protect Ukrainian sky from Russian air raids.
						</b>
					</div>
					<br />
					<div> 
						There are MiG 29 warplanes sitting at allied bases in Europe, ready for an immediate transfer.
						Ukrainian pilots are well-trained on these warplanes and can use them to stop these murderous attacks from the air tonight!
					</div>
					<br />
					<div>
						We can no longer stand back and watch schools, hospitals, homes, apartment buildings, bomb shelters, every day people of all ages being mass murdered on a daily basis.
						The news that a mother in labor and her unborn baby died after a maternity ward was bombed in Mariupol broke my heart.
						It is a tragedy that could have been prevented if Ukraine had the planes to defend its sky.
						I give you my word, I am about to become a single issue voter.
						My support in any upcoming election will be based on your immediate action to address this gap in Ukraine�s defense.
						I know, you deal with many requests, but this is an existential need - Ukraine will not survive without your support. 
						Nothing matters more to me at this moment.
					</div>
					<br />
					<div className="bst_wishes">
						Sincerely,<br />
						[your name]
					</div>
					</div>
					<div className="copy_btn" onClick={() => copyToClipboard('.letter_text')}>
						COPY TO CLIPBOARD
					</div>
				</section>
				<section className="theatre_sec">
					<div>
						We are very encouraged and grateful for the overwhelming support following Volodymyr Zelenskyy address to U.S. Congress on March 16th.
					</div>
					<br />
					<div>
						<b>
							But Ukraine has a dire and immediate need that has not yet been addressed - protecting Ukrainian civilians from the air attacks.
							Ukraine needs fighter planes to protect civilians from the air raids.
						</b>
					</div>
					<br />
					<div>
						At the time when Zelenskyy was speaking to Congress, Russian plane dropped a powerful bomb on a theater in the besieged city of Mariupol sheltering over a thousand civilians.
						It happened because there was not a single Ukrainian fighter jet in the sky over Mariupol which could prevent this horrible tragedy.
						This is happening all over Ukraine on a daily basis. 
						Fighter planes is the essential thing that can save Ukrainian civilians lives!
					</div>
					<div className="theatre_img">
					<img src="assets/mariupol_theatre.png" alt="" />
					</div>
					<div className="el_with_border">
						A satellite of the Mariupol theater from Monday, before it was bombed.
						The word "Children" is written in white on the pavement.
						Satellite image �2022 Maxar Technologies
					</div>
				</section>
				<section className="news_papers">
					<ul>
					<li>
						<img src="assets/WSJ_Zelenskyy.png" alt="" />
						<div className="content">
						<div className="title">
							WSJ Opinion - Why Not Victory in Ukraine?
						</div>
						<div className="text">
							<div>
								Zelenskyy challenges Biden to do more to defeat Russia�s invasion.
							</div>
							<br />
							<div>
								"The hang-up in providing these seems to have been U.S. reluctance to provoke 
								Mr. Putin with certain high-profile weapons, <b>as with President Biden�s refusal to assist with the transfer of 28 Polish MiG fighters to Ukraine</b>"
							</div>
						</div>
						</div>
					</li>
					<li>                
						<div className="content">
						<div className="title">
							The Washington Post Opinion 
							- We can�t let Putin�s threats deter us from supplying Ukrainians with fighter planes
						</div>
						<div className="text">
							<b>
								"We shouldn�t let an aggressor veto aid to his victims. 
								If the Ukrainians say they want MiG-29�s, we should provide them."
							</b>
						</div>
						</div>
						<img src="assets/Washington_Post.png" alt="" />
					</li>
					</ul>
				</section>
				<section className="authors">
					<p />
				</section>
			</div>
			<footer>
				<div className="container">
					<div className="protect_elem">
					<div>Protect Ukraine</div>
					<div>NOW</div>
					</div>
					<div className="text">
						We are a brother and sister, who were raised in Kharkiv, Ukraine. 
						We spent the last 30 years in the US, living the American dream, both with successful careers in high tech. 
						We love and admire the US and the principles on which it is built. 
						But now our focus is to help our beautiful Ukraine survive and win.
					</div>
					<div className="owners">
						� Sergey &amp; Galina Lubarsky
					</div>
				</div>
			</footer>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" />
		</>
	)
}
