!function(){
	var easy_consent = {
		all_code: `<div>
		<style>
/* @@@ OVERLAY*/
#overlay-optin{
  position: fixed; /* Sit on top of the page content */
  visibility: hidden;
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  -webkit-transition-duration: 1s;
       -o-transition-duration: 1s;
          transition-duration: 1s;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 99999; /* Specify a stack order in case you're using a different order for other elements */
}
/* @@@ OVERLAY - END*/

#opt_in_modal *{
	line-height: normal;
	padding: 0;
	margin: 0;
}
#opt_in_modal{ /* DEPTH 2 */
	visibility: hidden;
	margin-bottom: 20px !important;
	width: 50vw;
	height: auto;
	position: absolute;
	background: white;
	-moz-opacity: 0;
	opacity: 0;
	top: 20%;
	left: 50%;
	margin-left: -22.5vw !important;
	margin-top: -15vh !important;
	z-index: 9999999;
	-webkit-box-shadow: 0.25px 0.25px 5px 0.25px #484e57;
	        box-shadow: 0.25px 0.25px 5px 0.25px #484e57;
	border-radius: 3px;
}
#first-page-container{ /* DEPTH 2 */
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	    -ms-flex-direction: column;
	        flex-direction: column;
	-webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	        justify-content: space-between;
	height: 100%;
}
#datenschutz-link-container-desktop{
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: end;
	    -ms-flex-align: end;
	        align-items: flex-end;
}
#datenschutz-link-container-mobile{  /* DEPTH 5 A*/
	display: -webkit-box;
	display: -ms-flexbox;
	display: none;
}
#datenschutz-link-container-mobile a, #datenschutz-link-container-desktop a{
	font-size: 12px !important;
	text-decoration: none;
	color: rgb(160, 160, 160);
	padding: 6px !important;
	letter-spacing: 0.3px;
}
#datenschutz-link-container-mobile a:hover, #datenschutz-link-container-desktop a:hover{
	text-decoration: underline;
}
#optin-modal-title{  /*DEPTH 5 A*/
	text-align: center !important;
	font-size: 20px !important;
	padding-top: 15px !important;
	font-family: open sans,sans-serif;
	font-weight: lighter;
	letter-spacing: 0.4px;
	color: #8ec524;
}
#main-description-first-content-container{ /*DEPTH 4*/
	padding: 42px 30px 30px 40px !important;
}
#main-description-first-content-container p{ /*DEPTH 5 B*/
	letter-spacing: 0.25px !important;
	color: #30363e;
	font-size: 13px !important;
	font-family: open sans,sans-serif;
	line-height: 24px !important;
}

/* @@@ CHECKBOXES CONTROL @@@*/

#checkboxes-control-container{
	padding-left: 20px !important;
	padding-right: 40px !important;
}
#cookies-checkboxes-list{
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}
#cookies-checkboxes-list li{
	list-style-type: none;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	padding-left: 20px !important;
	padding-right: 20px !important;
}
#cookies-checkboxes-list li input{
	cursor: pointer;
}
#cookies-checkboxes-list li span{
	padding-left: 8px !important;
	font-family: open sans,sans-serif;
	font-size: 14px !important;
	text-transform: capitalize;
	color: rgb(150, 150, 150);
}
#cookies-checkboxes-list li span[class='active']{
	color: black !important;
}
/* @@@ CHECKBOXES CONTROL - END @@@*/

#cancel-and-more-info-container{
	padding: 10px 40px 0px 40px !important;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: end;
	    -ms-flex-pack: end;
	        justify-content: flex-end;
}
#cancel-and-more-info-container p{
	font-family: open sans, sans-serif;
	font-size: 13px !important;
	letter-spacing: 0.2px;
	line-height: 20px !important;
	color: rgb(150, 150, 150);
	text-transform: capitalize;
	cursor: pointer;
	padding: 12px 0px 12px 12px !important;
}
#cancel-and-more-info-container p:hover{
	text-decoration: underline;
}

/* @@@ MORE INFO*/
#more-info-content-container{
	opacity: 0;
	display: none;
	padding-bottom: 10px !important;
	-webkit-transition-duration: 0.8s;
	     -o-transition-duration: 0.8s;
	        transition-duration: 0.8s;
}
.cookie-type-info-block{
	margin: 20px 40px 20px 40px !important;
	padding: 7px !important;
	border: 1px solid rgb(220, 220, 220);
	border-radius: 2px;
	background-color: rgb(251, 251, 251);
}
.optin-modal-more-information-box-title{
	font-size: 14px !important;
	text-transform: capitalize;
	font-family: open sans, sans-serif;
	padding-bottom: 6px !important;
	font-weight: normal;
}
.info-block-description{
	font-family: open sans, sans-serif;
	font-size: 12px !important;
	line-height: 16px !important;
	color: rgb(100, 100, 100);
}
.cookie-type-info-block > p{
	padding-top: 28px !important;
	font-family: open sans, sans-serif;
	font-size: 11px !important;
	color: rgb(140, 140, 140);
	text-transform: none;
	cursor: pointer;
}
.cookie-type-info-block > p:hover{
	-webkit-transition-duration: 0.5s;
	     -o-transition-duration: 0.5s;
	        transition-duration: 0.5s;
	text-decoration: underline;
}

.cookies-anzeigen-opened-container{
	margin: 3px !important;
	margin-top: 20px !important;
	border: 1px solid rgb(200, 200, 200);
	display: none;
}
.cookies-anzeigen-opened-container ul li{
	list-style-type: none;
	padding: 7px !important;
	padding-left: 10px !important;
	border-bottom: 1px solid rgb(200, 200, 200);
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
}
.cookies-anzeigen-primary-li{
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}
.cookies-anzeigen-titles-container{
	background-color: #30363d !important;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}
.cookie-name-and-plus-container{
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
}
.cookie-name-and-plus-container, .cookie-name{
	width: 30%;
}
.cookies-anzeigen-opened-container .cookie-name, .cookies-anzeigen-opened-container .domain-title{
	color: #8ec524;
	font-size: 16px !important;
	font-family: open sans, sans-serif;
	font-weight: bold;
	letter-spacing: 0.25px;
}
.plus-info{
	margin-right: 15px !important;
	padding: 1px !important;
	padding-right: 4px !important;
	padding-left: 4px !important;
	border: 1px solid rgb(210, 210, 210);
	border-radius: 4px;
	font-weight: bold;
	cursor: pointer;
	font-size: 13px !important;
}
.plus-info:hover{
	background-color: #30363d;
	color: #8ec524;
}
.cookie-name-text, .domain-text{
	color: rgb(80, 80, 80);
	font-family: open sans, sans-serif;
	font-size: 13px !important;
}
.plus-info-description-text{
	font-family: open sans, sans-serif;
	font-size: 13px !important;
	color: rgb(130, 130, 130);
	line-height: 18px !important;
	display: none;
}
.domain-text{
	padding-left: 25px !important;
}
.domain-title{
	padding-left: 25px !important;
}
/* @@@ MORE INFO - END*/

/* @@@ ESCAPE BUTTONS*/
#first-page-buttons-direct-container{
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	        justify-content: space-between;
}
#confirm-selection{
	margin-right: 10px;
}
#accept-all-and-proceed, #optin-cancel-first-button{
	background-color: rgb(243, 243, 243);
	color: rgb(147, 147, 147);
}
/* @@@ ESCAPE BUTTONS - END*/

@media(max-width: 1650px){
	#opt_in_modal{
		width: 60vw;
		margin-left: -30vw !important;
	}
}

@media(max-width: 1350px){
	#opt_in_modal{
		width: 75vw;
		margin-left: -37.5vw !important;
	}
}

@media(max-width: 1050px){
	@supports not (-ms-high-contrast: none) {
		#opt_in_modal{
			width: 85vw;;
			margin-left: -42.5vw !important;
		}
	}
}

@media(max-width: 900px){
	.cookie-name-and-plus-container, .cookie-name{
		width: 40%;
	}
	#first-page-buttons-direct-container{
		-webkit-box-pack: end;
		    -ms-flex-pack: end;
		        justify-content: flex-end;
	}
	#datenschutz-link-container-desktop{
		display: none;
	}
	#datenschutz-link-container-mobile{
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
}

@media(max-width: 750px){
	@supports not (-ms-high-contrast: none) {
		#opt_in_modal{
			width: 92vw;
			margin-left: -46vw !important;
		}
		#optin-modal-title{
			line-height: 32px !important;
			padding-left: 6px !important;
			padding-right: 6px !important;
		}
		.second-page-controller-description-li div{
			margin-top: 12px !important;
			margin-bottom: 12px !important;
			width: 30px;
		}
		.second-page-controller-description-li{
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			    -ms-flex-direction: column;
			        flex-direction: column;
		}
		.second-page-controller-description-li p{
			text-align: center !important;
			width: 100%;
		}
		#second-page-controller-description-title-container, #second-page-controller-description-title-container-nicht{
			text-align: center !important;
		}
		#main-description-first-content-container{
			padding: 40px 20px 40px 20px !important;
		}
		#main-description-first-content-container p{
			text-align: center !important;
		}
		.cookies-anzeigen-primary-li{
			display: block;
		}
		.cookie-name-and-plus-container, .cookie-name{
			width: 100%;
			padding-bottom: 11px !important;
		}
		.cookie-name-text, .domain-text{
			padding-left: 0px !important;
		}
	}
}

@media(max-width: 580px){
	@supports not (-ms-high-contrast: none) {
		#main-description-first-content-container{
			padding-top: 28px !important;
		}

		#cancel-and-more-info-container{
			padding-top: 35px !important;
		}
		#escape-buttons-container{
			padding-bottom: 20px !important;
			padding-top: 0px !important;
		}
		#escape-buttons-direct-container{
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			    -ms-flex-direction: column;
			        flex-direction: column;
			-webkit-box-align: center;
			    -ms-flex-align: center;
			        align-items: center;
			width: 100% !important;
		}
		#confirm-selection{
			margin: 0px !important;
		}
		#escape-buttons-direct-container button{
			width: 100% !important;
		}
        .cookie-type-info-block{
			margin: 20px 30px 20px 30px !important;
		}
		#cookies-checkboxes-list{
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			    -ms-flex-direction: column;
			        flex-direction: column;
		}
		#cookies-checkboxes-list li{
			padding-top: 10px;
		}
	}
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     #opt_in_modal{
		width: 60vw !important;
		margin-left: -30vw !important;
	}
}
@media screen and (min-width:0\0) and (min-resolution: .001dpcm) { 
     #opt_in_modal{
		width: 60vw !important;
		margin-left: -30vw !important;
	}
}
</style>
		<div id="overlay-optin"></div>
		<div id="opt_in_modal">
		<div id="first-page-container">
			<div id="all-main-content_container-test">
				<div class="title-container-test">
					<div id="datenschutz-link-container-mobile">
						<a href="/datenschutz">Datenschutz</a>
						<a href="/impressum">Impressum</a>
					</div>
					<p id="optin-modal-title">
						Verwalten Sie Ihre Cookie-Einstellungen für diese Website
					</p>
				</div>
				<div id="main-description-container-test">
					<div id="main-description-first-content-container">
	                  <p>Você precisa entender que eu tou louco pra te beijar, menina me da só uma chance!<b>necessários</b> E também não esqueca dos <b>Estatísticos</b>, da sie uns helfen diese Website und ihre Funktionen für Sie zu verbessern und eine weitere Gruppe von Cookies hilft uns dabei unser <b>Marketing</b> zu optimieren. Bitte helfen Sie uns dabei, unsere Webseite besser zu machen und stimmen Sie der Nutzung dieser Cookies zu. Vielen Dank!</p>
					</div>
					<div id="checkboxes-control-container">
						<ul id="cookies-checkboxes-list">
							<li>
								<input type="checkbox" name="cookies-options" checked="" disabled="">
								<span>notwendig</span>
							</li>
							<li>
								<input type="checkbox" name="cookies-options">
								<span>komfort</span>
							</li>
							<li>
								<input type="checkbox" name="cookies-options">
								<span>marketing</span>
							</li>
						</ul>
					</div>
					<div id="cancel-and-more-info-container">
						<p id="cancel-and-more-info-container-p">mehr information</p>
					</div>
					<div id="more-info-content-container">
						<div id="more-info-direct-content-container">
							<div class="cookie-type-info-block">
								<div>
									<p class="optin-modal-more-information-box-title">notwendig</p>
									<p class="info-block-description">Diese Cookies sind notwendig für das korrekte Funktionieren der Webseite und für den Betrieb unbedingt erforderlich. Sie ermöglichen zum Beispiel sicherheitsrelevante Funktionalitäten und das Erkennen des Login-Status eines Nutzers für den Zugriff auf gesicherte und personalisierte Bereiche der Webseite. Ohne sie kann die Webseite aus technischen Gründen nicht genutzt werden</p>
								</div>
								<p class="cookies-anzeigen-opener">Cookies anzeigen</p>
								<div class="cookies-anzeigen-opened-container">
									<ul>
										<li class="cookies-anzeigen-titles-container">
											<span class="cookie-name">Name</span>
											<span class="domain-title">Domain</span>
										</li>
	                         					<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">__cfduid</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Wird vom Cloudflare CDN verwendet, um vertrauenswürdigen Webdatenverkehr zu identifizieren.</li>
										<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">optin_referrer_aux</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Zusatz-Cookie für die Opt-In-Funktionalitäten</li>
										<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">optin_url_params_aux</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Zusatz-Cookie für die Opt-In-Funktionalitäten</li>
										<li class="cookies-anzeigen-primary-li" style="border-bottom: none !important;">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">optin_options_and_flag</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text" style="border-bottom: none !important; border-top: 1px solid rgb(200, 200, 200) !important;">Speichert den Cookie-Zustimmungsstatus des Benutzers für die aktuelle Domain.</li>
									</ul>
								</div>
							</div>
							<div class="cookie-type-info-block">
								<div>
									<p class="optin-modal-more-information-box-title">komfort</p>
									<p class="info-block-description">Cookies für Komfort-Funktionen erheben anonyme, nicht personalisierte Daten über die Webseiten-Nutzung und dienen dazu Inhalt und Aufbau der Webseite zu verbessern. Sie ermöglichen es, auftretende Fehler auf der Webseite zu identifizieren und tragen somit zu einer besseren Nutzererfahrung bei. Die erhobenen Daten dienen im Rahmen von Optimierungsmaßnahmen auch zur Erstellung von Leistungsberichten, die es dem Webseitenbetreiber erlauben, für den Nutzer relevante Inhalte auszubauen und das Webseitenangebot zu verbessern. Diese Cookies können die Aktivitäten des Benutzers auf anderen Webseiten nicht verfolgen</p>
								</div>
								<p class="cookies-anzeigen-opener">Cookies anzeigen</p>
								<div class="cookies-anzeigen-opened-container">
									<ul>
										<li class="cookies-anzeigen-titles-container">
											<span class="cookie-name">Name</span>
											<span class="domain-title">Domain</span>
										</li>                                        
	                                        <li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">_gid</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Google Universal Analytics - Registriert eine eindeutige ID, mit der statistische Daten zur Verwendung der Website durch den Besucher generiert werden.</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">_ga</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Google Universal Analytics - Registriert eine eindeutige ID, mit der statistische Daten zur Verwendung der Website durch den Besucher generiert werden.</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">_gat</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Wird von Google Analytics verwendet, um die Anforderungsrate zu drosseln.</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">_hjid</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Hotjar Cookie. Enthält eine zufällige eindeutige Nutzer ID. Auf diese Weise können zu statistischen Zwecken Daten zum Besucherverhalten erhoben werden.</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">__cfduid</p>
											</span>
											<a href="#" class="domain-text">siteimproveanalytics.com</a>
										</li>
										<li class="plus-info-description-text">Wird vom Cloudflare CDN verwendet, um vertrauenswürdigen Webdatenverkehr zu identifizieren.</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">_gali</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Google Analytics - Wird verwendet, um Nutzer unterscheiden zu können.</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">hjViewportId</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Registriert eine eindeutige ID, mit der statistische Daten zur Verwendung der Website durch den Besucher generiert werden.</li>
											<li class="cookies-anzeigen-primary-li" style="border-bottom: none !important;">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">_hjTLDTest</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text" style="border-bottom: none !important; border-top: 1px solid rgb(200, 200, 200) !important;">HotJar Session Cookie zum prüfen, ob der Nutzer Cookies aktiviert hat.</li>
									</ul>
								</div>
							</div>
							<div class="cookie-type-info-block">
								<div>
									<p class="optin-modal-more-information-box-title">marketing</p>
									<p class="info-block-description">Diese Cookies dienen dem Messen der Effektivität und der Steuerung von Werbekampagnen. Sie ermöglichen dem Webseitenbetreiber den Erfolg von Werbemaßnahmen nachzuvollziehen und erlauben somit, mit Hilfe von Werbemaßnahmen wie z.B. durch Werbung in Suchmaschinen, interessierte Nutzer besser zu erreichen.</p>
								</div>
								<p class="cookies-anzeigen-opener">Cookies anzeigen</p>
								<div class="cookies-anzeigen-opened-container">
									<ul>
										<li class="cookies-anzeigen-titles-container">
											<span class="cookie-name">Name</span>
											<span class="domain-title">Domain</span>
										</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">fr</p>
											</span>
											<a href="#" class="domain-text">facebook.com</a>
										</li>
										<li class="plus-info-description-text">Wird von Facebook verwendet, um eine Reihe von Werbeprodukten zu liefern, z. B. Echtzeitgebote von Drittanbietern.</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">_fbp</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Wird von Facebook verwendet, um eine Reihe von Werbeprodukten zu liefern, z. B. Echtzeitgebote von Drittanbietern.</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">_gcl_au</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Wird von Google AdSense verwendet, um mit der Effizienz von Werbung auf Websites zu experimentieren, die ihre Dienste nutzen.</li>
											<li class="cookies-anzeigen-primary-li">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">_hjIncludedInSample</p>
											</span>
											<a href="#" class="domain-text">takevalue.de</a>
										</li>
										<li class="plus-info-description-text">Hotjar Session Cookie. Dient dazu, festzulegen, ob der Nutzer innerhalb seiner Session zu der Zielgruppenstichprobe gezählt wird.</li>
											<li class="cookies-anzeigen-primary-li" style="border-bottom: none !important;">
												<span class="cookie-name-and-plus-container">
												<span class="plus-info">+</span>
												<p class="cookie-name-text">tr</p>
											</span>
											<a href="#" class="domain-text">facebook.com</a>
										</li>
										<li class="plus-info-description-text" style="border-bottom: none !important; border-top: 1px solid rgb(200, 200, 200) !important;">Wird von Facebook verwendet, um eine Reihe von Werbeprodukten zu liefern, z. B. Echtzeitgebote von Drittanbietern.</li>                                        
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div id="escape-buttons-container" style="padding-bottom: 40px; padding-left: 34px; padding-right: 40px;">
						<div id="first-page-buttons-direct-container">
							<div id="datenschutz-link-container-desktop">
								<a href="/datenschutz">Datenschutz</a>
								<a href="/impressum">Impressum</a>
							</div>
							<div id="escape-buttons-direct-container">
								<button id="confirm-selection" style="cursor: pointer; padding: 18px !important; font-size: 13px !important; background-color: rgb(243, 243, 243) !important; color: rgb(147, 147, 147) !important; font-family: open sans, sans-serif; border: none;">Auswahl bestätigen</button>
								<button id="accept-all-and-proceed" style="cursor: pointer; padding: 18px !important; font-size: 13px !important; background-color: #8ec524 !important; color: #000000 !important; font-family: open sans, sans-serif; font-weight: bold; border: none; width: 154px;">Alle auswählen</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>`,
	modal_js: ` !function(){
	try{
		// elements declaration
		var first_page = document.querySelector("#first-page-container");
		var optin_overlay = document.querySelector("#overlay-optin");
		var accept_all_and_proceed = document.querySelector("#accept-all-and-proceed");
		var optin_modal = document.querySelector("#opt_in_modal");
		var checkbox_inputs = document.querySelectorAll("input[name='cookies-options']");
		var checkboxes_texts = document.querySelectorAll("#cookies-checkboxes-list li span");
		var more_info_button = document.querySelector("#cancel-and-more-info-container-p");
		var more_info_content_container = document.querySelector("#more-info-content-container");
		var cookies_anzeigen_opener = document.querySelectorAll(".cookies-anzeigen-opener");
		var cookies_anzeigen_opened_containers = document.querySelectorAll(".cookies-anzeigen-opened-container");
		var cookies_anzeigen_plus_info = document.querySelectorAll(".plus-info");
		var confirm_selection = document.querySelector("#confirm-selection");
		var cookies_anzeigen_plus_info_li = document.querySelectorAll(".plus-info-description-text");
		var optin_modal_escape_buttons = [accept_all_and_proceed, confirm_selection];

		var cookie_setting = function(wc_force, fc_force){ // parameters optional for alles aktivieren
			var wc, fc;
			var time = new Date();
			time.setTime(time.getTime() + 63113904000);
			wc = String(wc_force || checkbox_inputs[1].checked);
			fc = String(fc_force || checkbox_inputs[2].checked);
			document.cookie = "optin_options_and_flag=notwnedige*true,komfort*" + wc + ",marketing*" + fc + "; expires=" + time.toUTCString() + ";path=/";
		}

		var elem_visibility_setter = function(elem, vis, time){
			setTimeout(function(){
				elem.style.visibility = vis;
			}, time);
		}

		// vanishes the modal and sets the cookie with all false for two years
		var error_handler = function(){
			document.querySelector("#opt_in_modal") ? (document.querySelector("#opt_in_modal").style.display = "none") : undefined;
			document.querySelector("#overlay-optin") ? (document.querySelector("#overlay-optin").style.opacity = 0) : undefined;
		    document.querySelector("#overlay-optin") ? (document.querySelector("#overlay-optin").style.visibility = "hidden") : undefined;
			var time = new Date();
			time.setTime(time.getTime() + 63113904000);
			document.cookie = "optin_options_and_flag=notwnedige*true,werbe-cookies*false,funktionale*false;expires=" + time.toUTCString() + ";path=/";
		}

		// forces all checkboxes to be checked for visual effect when user clicks to activate all
		var all_checkboxes_force_check = function(){
			try{
				setTimeout(function(){
					checkbox_inputs[1].checked = true;
					checkboxes_texts[1].className = "active";
				}, 0);
				setTimeout(function(){
					checkbox_inputs[2].checked = true;
					checkboxes_texts[2].className = "active";
				}, 350);
				setTimeout(function(){
					optin_overlay.style.opacity = 0;
					optin_overlay.style.visibility = "hidden";
					optin_modal.style.opacity = "0";
					elem_visibility_setter(optin_modal, "hidden", 600);
				}, 700);
			}catch(error){error_handler();}
		}
        
        // pushes an event in the dataLayer, can be used in any case
        var dataLayer_firstpageview_pusher = function(ev, data){
			try{
				window.dataLayer.push({
					event: ev,
					optin_data: data
				});
			}catch(error){}
		}

		var get_cookie = function(cname){ // from mdn
          try{
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }catch(error){return "";}
        }

		var aux_optin_cookies_false_setter = function(){
			try{
				document.cookie = "optin_referrer_aux=false; path=/;";
				document.cookie = "optin_url_params_aux=false; path=/;";
			}catch(error){}
		}

		var aux_optin_cookies_controller = function(){
			try{
				var pageview_already_executed = document.cookie.indexOf("komfort*true") > -1;
				var aux_optin_cookie_exists = document.cookie.indexOf("optin_referrer_aux") > -1;
				var aux_optin_cookie_equals_false = (get_cookie("optin_referrer_aux") == "false");

				if(pageview_already_executed){
					aux_optin_cookies_false_setter();
					return;
				}

				if(!aux_optin_cookie_exists && !aux_optin_cookie_equals_false){
					if(/(utm_source)|(gclid)/.test(window.location.search)){
						document.cookie = "optin_url_params_aux=" + encodeURIComponent(window.location.search) + "; path=/;";
					}else{document.cookie = "optin_url_params_aux=" + undefined + "; path=/;";}

					if(document.referrer){
						document.cookie = "optin_referrer_aux=" + encodeURIComponent(document.referrer) + "; path=/;";
					}else{document.cookie = "optin_referrer_aux=" + undefined + "; path=/;";}
				}
			}catch(error){console.log(error);}
		}

		window.__fpv_deny = document.cookie.indexOf("komfort*true") > -1;
		var pageview_loss_preventor = function(clicked_button){
			try{
				if(!window.__fpv_deny){
					if(checkbox_inputs[1].checked || (clicked_button.id == "accept-all-and-proceed")){
						window.__fpv_deny = true;
						var optin_ref = get_cookie("optin_referrer_aux");
						var optin_params_url = get_cookie("optin_url_params_aux");

						var referrer_formatted = (optin_ref == "false") || (optin_ref == "undefined") ? undefined : optin_ref;
					    var url_params_formatted = ((optin_params_url == "false") || (optin_params_url == "undefined")) ? undefined : optin_params_url;

						dataLayer_firstpageview_pusher("pageview_flag", {
							optin_aux_params: url_params_formatted,
							optin_aux_referrer: referrer_formatted
						});
						aux_optin_cookies_false_setter();
					}
				}
			}catch(error){console.log(error);}
		}

		aux_optin_cookies_controller();

		// all escape buttons logic 
		for (var i = 0; i < optin_modal_escape_buttons.length; i++) {
			optin_modal_escape_buttons[i].addEventListener("click", function(){
				try{
					optin_modal.style.transition = "0.6s";

					pageview_loss_preventor(this);
                  
					this.id.indexOf("accept-all-and-proceed") > -1 ? cookie_setting("true", "true") : cookie_setting();
					this.id.indexOf("accept-all-and-proceed") > -1 ? all_checkboxes_force_check() : undefined;

					if(!(this.id.indexOf("accept-all-and-proceed") > -1)){
						optin_overlay.style.opacity = 0;
						optin_overlay.style.visibility = "hidden";
						optin_modal.style.opacity = "0";
						elem_visibility_setter(optin_modal, "hidden", 600);
					}
					window.scrollTo(0, 0);
				}catch(error){error_handler();}
			});
		}

		// checkboxes text effect. iterator starts at one because the first is always checked (necessary cookies)
		for(var i = 1; i < checkbox_inputs.length; i++){
			checkbox_inputs[i].addEventListener("change", (function(){
				var x = i;
				return function(){
					try{
						checkboxes_texts[x].className.indexOf("active") > - 1 ? (checkboxes_texts[x].className = "") : (checkboxes_texts[x].className = "active");
					}catch(error){}
				}
			})());
		}

		// MORE INFO PAGE
		// open and close more info page
		more_info_button.addEventListener("click", function(){
			try{
				if(!(this.className.indexOf("active") > -1)){
					more_info_content_container.style.display = "block";
					setTimeout(function(){more_info_content_container.style.opacity = "1";}, 0);
					this.className = "active";
					this.innerText = "schließen";
				}else{
					more_info_content_container.style.display = "none";
					more_info_content_container.style.opacity = "0";
					this.className = "";
					this.innerText = "Mehr Information";
					window.scrollTo(0, 0);
				}
			}catch(error){}
		});

		// open and close the list of cookies section (cookies anzeigen)
		for(var i = 0; i < cookies_anzeigen_opener.length; i++){
			cookies_anzeigen_opener[i].addEventListener("click", (function(){
				var x = i;
				return function(){
					try{
						if(!(this.className.indexOf("active") > -1)){
							cookies_anzeigen_opened_containers[x].style.display = "block";
							this.className = "active";
							this.innerText = "Cookies ausblenden";
						}else{
							cookies_anzeigen_opened_containers[x].style.display = "none";
							this.className = "";
							this.innerText = "Cookies anzeigen";
						}
					}catch(error){}
				}
			})());
		}

		// open and close the plus option
		for(var i = 0; i < cookies_anzeigen_plus_info.length; i++){
			cookies_anzeigen_plus_info[i].addEventListener("click", (function(){
				var x = i;
				return function(){
					try{
						if(!(this.status && this.status.indexOf("active") > -1)){
							cookies_anzeigen_plus_info_li[x].style.display = "block";
							this.style.paddingRight = "5px";
							this.style.paddingLeft = "5.5px";
							this.innerText = "-";
							this.status = "active";
						}else{
							cookies_anzeigen_plus_info_li[x].style.display = "none";
							this.style.paddingRight = "4px";
							this.style.paddingLeft = "4px";
							this.innerText = "+";
							this.status = "";
						}
					}catch(error){}
				}
			}()));
		}

		// control of the appearence of the modal itself and effect and functions that need to be executed every page load
		if(!(document.cookie.indexOf("optin_options_and_flag") > -1)){
			// modal slowly appear effect
			optin_modal.style.visibility = "visible";
			optin_modal.style.transitionDuration = "1s";
			optin_modal.style.opacity = "1";
			optin_overlay.style.visibility = "visible";
			optin_overlay.style.opacity = "1";
		}
	}catch(error){error_handler();}
}();`
	}

	var modal = document.createElement("div");
	modal.innerHTML = easy_consent.all_code;
	document.querySelector("body").appendChild(modal);

	eval(easy_consent.modal_js);
}();