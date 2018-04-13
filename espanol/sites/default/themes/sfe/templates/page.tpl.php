<a href="#content" 
	id="skipnav"
	target="_self" 
	onClick="javascript:(function($) { $('#content').attr('tabIndex',-1).focus(); }) (jQuery);"
	>Omitir Navegaci&oacute;n</a>
<div class="container-page">
	<div id="bg-container">
		<div id="bg-photo"></div>
	</div>
	<!-- begin logo -->
	<div class="logo-container">
		<a href="/" title="Smokefree espa&ntilde;ol">
			<div class="logo">
				<div class="logo-image">
					<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
						alt="Smokefree espa&ntilde;ol" 
						/>
				</div>
			</div>
		</a>
	</div>
	<!-- end logo -->
	
<?php if (!empty($primary_nav) 
	|| !empty($secondary_nav) 
	|| !empty($page['navigation'])): ?>
	<div class="navbar nav">
		<nav role="navigation">
			<?php 
			if (!empty($primary_nav)) {
				print render($primary_nav);
			}
			if (!empty($page['navigation'])) {
				print render($page['navigation']);
			}
			if (!empty($secondary_nav)) {
				print render($secondary_nav);
			}
			?>
		</nav>          
	</div>
	<a href="#"
		class="mobile-btn collapsed" 
		data-toggle="collapse" 
		><img src="/<?php echo path_to_theme(); ?>/images/header/smokefree-hd3-menu-btn-mobile-46x44.png" 
			alt="menu"
			/></a>
	<div class="nav-collapse collapse">
		<nav role="navigation">
			<?php 
			if (!empty($primary_nav)) {
				print render($primary_nav);
			}
			if (!empty($page['navigation'])) {
				print render($page['navigation']);
			}
			if (!empty($secondary_nav)) {
				print render($secondary_nav);
			}
			?>
		</nav>
	</div>
	<!-- end class navbar nav -->
	
<?php endif; ?>
	<div class="tagline">
		<p>
			Mi familia, mi salud, mi vida. <strong>Mi tiempo para dejar de fumar.</strong>
		</p>
		<div class="tagline-border"><!--<img src="/<?php print path_to_theme(); ?>/images/header/smokefree-hd7-tagline-fiestaborder-mobile-4x1.png" /> --></div>
	</div>

	<div id="search-header">
			<form method="get" 
				action="https://barney2.cit.nih.gov/search"
				name="search"
				onsubmit="javascript:if (document.getElementById('searchbox-header').value=='B&uacute;squeda' 
							|| document.getElementById('searchbox-header').value=='') 
								return false;">
				<input type="hidden" name="site"            value="SMOKEFREE_ESPANOL" />
				<input type="hidden" name="client"          value="SMOKEFREE_ESPANOL_frontend" />
				<input type="hidden" name="proxystylesheet" value="SMOKEFREE_ESPANOL_frontend" />
				<input type="hidden" name="output"          value="xml_no_dtd" />
				<input type="hidden" name="filter"          value="0" />
				<input type="hidden" name="getfields"       value="*" />
				<div id="search-header-container">
                    <label for="searchbox-header" class="sr-only">Búsqueda</label>
					<input id="searchbox-header" 
						type="text" 
						name="q" 
						size="30" 
						maxlength="255"
						value="B&uacute;squeda"
						onfocus="javascript:if (this.value=='B&uacute;squeda') this.value='';"
						onblur="javascript:if (this.value == '') this.value ='B&uacute;squeda';"
						/>&nbsp;&nbsp;
					<input type="submit" 
						value="B&uacute;squeda" 	
						alt="B&uacute;squeda"
						class="search-button" 
						src="/<?php echo path_to_theme(); ?>/images/content/spacer.png"						
						/>
				</div>
			</form>
		</div>
    <div class="nav-bottom-border"><!--<img src="/<?php echo path_to_theme(); ?>/images/header/smokefree-hd6-tagline-bottomborder-mobile-4x1.png" alt="" />--></div>
	
<?php 
/* Front page contents */
if (drupal_is_front_page()) : ?>
	
	<!-- Containers for home page slides -->
	<div id="wrapper">
	
		<!-- Page header for accessibility -->
		<a id="content" name="content"></a>
		<h1 class="hidden">Bienvenidos a <span lang="en-US">Smokefree</span> espa&ntilde;ol</h1>
		
		<ul id="mask">
		
			<!-- Main box -->
			<li id="main" class="box picture-grid">
									
				<!-- First row (desktop view) -->
				<div class="row-fluid picture-row"
					><ul><li class="picture-box tablet-column-1 green"
							><div class="img-container"
								><a href="#yo-estoy-listo-para-parar"
									class="homelink"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo1.jpg" 
										alt="" 
										/>
									<div class="image-caption-bg"
										><div class="image-caption-text">
											Yo estoy listo para parar
										</div>
										<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
											alt="M&aacute;s detalles sobre 'Yo estoy listo para parar.'" 
											class="image-caption-arrow"
											/>
									</div>
								</a>
							</div>
						</li>
						<li class="picture-box tablet-column-2 blue"
							><div class="img-container"
								><a href="#quiero-ayudar-a-un-fumador"
									class="homelink"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo2.jpg" 
										alt="" 
										/>
									<div class="image-caption-bg"
										><div class="image-caption-text">
											Quiero ayudar a un fumador
										</div>
										<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
											alt="M&aacute;s detalles sobre 'Quiero ayudar a un fumador.'" 
											class="image-caption-arrow"
											/>
									</div>
								</a>
							</div>
						</li>
						<li class="picture-box tablet-column-1 orange"
							><div class="img-container"
								><a href="#yo-tengo-antojos-de-tabaco"
									class="homelink"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo3.jpg" 
										alt="" 
										/>
									<div class="image-caption-bg"
										><div class="image-caption-text">
											Yo tengo antojos de tabaco
										</div>
										<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
											alt="M&aacute;s detalles sobre 'Yo tengo antojos de tabaco.'" 
											class="image-caption-arrow"
											/>
									</div>
								</a>
							</div>
						</li>
						<li class="picture-box extra green"
							><div class="img-container"
								><a href="/preparacion-de-un-plan-para-dejar-de-fumar"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo4.jpg" 
										alt="" 
										/>
									<div class="photo-badge">Preparaci&oacute;n de un plan para dejar de fumar</div>
									<div class="image-caption-bg"
										><div class="image-caption-text">
											Haga un plan para dejar de fumar
										</div>
										<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
											alt="M&aacute;s detalles sobre 'Haga un plan para dejar de fumar.'" 
											class="image-caption-arrow"
											/>
									</div>
								</a>
							</div>
						</li>
					</ul>
				</div>
				
				<!-- Second row  (desktop view) -->
				<div class="row-fluid picture-row">
					<ul>
						<li class="picture-box tablet-column-2 blue"
							><div class="img-container"
								><a href="#me-deslice" 
									class="homelink"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo5.jpg" 
										alt="" 
										/>
									<div class="image-caption-bg"
										><div class="image-caption-text">
											Me deslic&eacute;
										</div>
										<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
											alt="M&aacute;s detalles sobre 'Me deslic&eacute;.'" 
											class="image-caption-arrow"
											/>
									</div>
								</a>
							</div>
						</li>
						<li class="picture-box tablet-column-1 orange"
							><div class="img-container"
								><a href="#quiero-proteger-a-mi-familia" 
									class="homelink"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo6.jpg" 
										alt=""
										/>
									<div class="image-caption-bg"
										><div class="image-caption-text">
											Quiero proteger a mi familia
										</div>
										<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
											alt="M&aacute;s detalles sobre 'Quiero proteger a mi familia.'" 
											class="image-caption-arrow"
											/>
									</div>
								</a>
							</div>
						</li>
						<li class="picture-box tablet-column-2 green"
							><div class="img-container"
								><a href="#yo-fumo-a-veces" 
									class="homelink"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo7.jpg" 
										alt="" 
										/>
									<div class="image-caption-bg"
										><div class="image-caption-text">
											Yo fumo a veces
										</div>
										<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
											alt="M&aacute;s detalles sobre 'Yo fumo a veces.'" 
											class="image-caption-arrow"
											/>
									</div>
								</a>
							</div>
						</li>
						<li class="picture-box extra blue"
							><div class="img-container"
								><a href="/smokefreetxt-espanol" 
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo8.jpg" 
										alt="" 
										/>
									<div class="photo-badge"><span lang="en-US" title="Smoke-free Text">SmokefreeTXT</span> en espa&ntilde;ol </div>
									<div class="image-caption-bg"
										><div class="image-caption-text">
											Dejar de fumar con <span lang="en-US" title="Smoke-Free Text">SmokefreeTXT</span>
										</div>
										<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
											alt="M&aacute;s detalles sobre 'Dejar de fumar con Smoke-Free Text.'" 
											class="image-caption-arrow"
											/>
									</div>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</li>
			
			<!-- Box 1 -->
			<li id="yo-estoy-listo-para-parar" class="box green">
				<div class="box-container">
					<div class="box-header">
						<div class="box-title">
							<h2>Yo estoy listo para parar.</h2>
						</div>
						<div class="box-back-link">
							<a href="#main" class="homelink" title="Anterior">Anterior. </a>
						</div>
						<div class="col_1_of_3_cols">
							<div class="span_2_of_5">
								<div class="img-container"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo1.jpg" 
										alt="mujer feliz" 
										/>
								</div>
							</div>
							<div class="span_3_of_5">
								<div class="quote">
									<blockquote>
										<strong>&quot;</strong>Dejar de fumar no va a ser fácil, pero definitivamente 
										vale la pena. Esta es la hora de dejar de fumar, usted puede 
										hacerlo.<strong>&quot;</strong>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
					<div class="col_2_of_3_cols">
						<div class="span_2_of_5">
							<div class="description">
								<strong>&iexcl;Lo puede lograr!</strong>
								<p>
									Aprenda como dejar de fumar definitivamente.
								</p>
							</div>
						</div>
						<div class="span_3_of_5">
							<div class="related-links">
								<ul>
									<li><a href="/el-dia-que-deje-de-fumar">Pasos para un día sin fumar
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una marca de verificaci&oacute;n." 
												class="image-checkmark"
												/>
										</a>
									</li>
									<li><a href="/preparacion-de-un-plan-para-dejar-de-fumar">Haciendo un plan para dejar de fumar
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una estrella." 
												class="image-star"
												/>
										</a>
									</li>
									<li class="last-link"><a href="/smokefreetxt-espanol"><span lang="en-US" 
										title="Smoke-Free Text">SmokefreeTXT</span>
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Un bloc de notas." 
												class="image-notepad"
												/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col_3_of_3_cols">
						<div class="col_3_of_4_cols">
							<div class="poll">
								<!--
								<h3>Encuesta</h3>
								<?php
								/*$block = bootstrap_poll_block_view('',33);
								print render($block['content']); */
								?>
								-->
								<div class="img-container">
									<a href="/smokefreetxt-espanol" 
										title="SmokefreeTXT en español">
										<img src="/<?php echo path_to_theme(); ?>/images/home/smokefreetxt.png" 
											alt="Smokefree text en español" 
										/>
									</a>
								</div>
								<strong>
									<a href="/smokefreetxt-espanol">Usa tu celular para dejar de fumar</a> 
								</strong>
								<p>
									<a href="/smokefreetxt-espanol">
										Obtenga animo, consejos y ayuda para dejar 
										y mantenerse sin fumar. <!--Para suscribirse, -->
										Mande <em>LIBRE</em> al 47848 desde su celular<!-- o 
										haga clic abajo-->.
									</a>
								</p>
								<p>
									<a class="form-submit" href="/smokefreetxt-espanol">Suscribirse</a>
								</p>

								<p>
									<small>
									Pueden aplicarse cargos por mensajes y datos.
									Responde PARE para dejar de recibir mensajes, o AYUDA para recibir informacion. Enviamos un maximo de cinco mensajes por dia.
									</small>
								</p>
								<!--<a href="/smokefreetxt-espanol" class="form-submit">Suscribirse</a>-->
							</div>
						</div>
						<div class="col_4_of_4_cols">
							<div class="quiz">
								<h3>Cuestionario</h3>
								<p>
									&iquest;Antojos de cigarrillos? Averigüe cuánto depende de la nicotina. &iexcl;Tome el cuestionario!
								</p>
								<a href="/cuestionario-sobre-la-abstinencia-del-cigarrillo" class="submit">Tome el cuestionario</a>
								
							</div>
						</div>
					</div>
				</div>
				<div class="back-link">
					<a href="#main" class="homelink" title="Anterior">Anterior. </a>
				</div>
			</li>
			
			<!-- Box 2 -->
            <li id="quiero-ayudar-a-un-fumador" class="box blue">
				<div class="box-container">
					<div class="box-header">
						<div class="box-title">
							<h2>Quiero ayudar a un fumador.</h2>
						</div>
						<div class="box-back-link">
							<a href="#main" class="homelink" title="Anterior">Anterior. </a>
						</div>
						<div class="col_1_of_3_cols">
							<div class="span_2_of_5">
								<div class="img-container"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo2.jpg" 
										alt="hermanos" 
										/>
								</div>
							</div>
							<div class="span_3_of_5">
								<div class="quote">
									<blockquote>
										<strong>&quot;</strong>Ayude a un fumador en su vida. Su apoyo har&aacute; que sea m&aacute;s 
										f&aacute;cil dejar de fumar para 
										siempre.<strong>&quot;</strong>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
					<div class="col_2_of_3_cols">
						<div class="span_2_of_5">
							<div class="description">
								<strong>Este presente para apoyar a su familia y amigos. </strong>
								<p>
									Los puede apoyar mientras dejan de fumar.
								</p>
							</div>
						</div>
						<div class="span_3_of_5">
							<div class="related-links">
								<ul>
									<li><a href="/apoyo-social"><span title="Apoyo Social">Apoyo social</span>
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una marca de verificaci&oacute;n." 
												class="image-checkmark"
												/>
										</a>
									</li>
									<li><a href="/efectos-de-la-salud">Efectos de la salud
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Un calendario." 
												class="image-calendar"
												/>
										</a>
									</li>
									<li class="last-link"><a href="/hable-con-un-experto">Hable con un experto
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una estrella." 
												class="image-star"
												/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col_3_of_3_cols">
						<div class="col_3_of_4_cols">
							<div class="poll">
								<!--
								<h3>Encuesta</h3>
								<?php
								/*$block = bootstrap_poll_block_view('',34);
								print render($block['content']); */
								?>
								-->
								<div class="img-container">
									<a href="/smokefreetxt-espanol" 
										title="SmokefreeTXT en español">
										<img src="/<?php echo path_to_theme(); ?>/images/home/smokefreetxt.png" 
											alt="Smokefree text en español" 
										/>
									</a>
								</div>
								<strong>
									<a href="/smokefreetxt-espanol">Usa tu celular para dejar de fumar</a> 
								</strong>
								<p>
									<a href="/smokefreetxt-espanol">
										Obtenga animo, consejos y ayuda para dejar 
										y mantenerse sin fumar. <!--Para suscribirse, -->
										Mande <em>LIBRE</em> al 47848 desde su celular<!-- o 
										haga clic abajo-->.
									</a>
								</p>
								
								<a class="form-submit" href="/smokefreetxt-espanol">Suscribirse</a>								
								
								<small>
								Pueden aplicarse cargos por mensajes y datos.
								Responde PARE para dejar de recibir mensajes, o AYUDA para recibir informacion. Enviamos un maximo de cinco mensajes por dia.
								</small>
								<!--<a href="/smokefreetxt-espanol" class="form-submit">Suscribirse</a>-->
							</div>
						</div>
						<div class="col_4_of_4_cols">
							<div class="quiz">
								<h3>Cuestionario</h3>
								<p>
									Aseg&uacute;rese de que est&aacute; manteniendo 
									segura a su familia. Averig&uuml;e cu&aacute;nto 
									sabe sobre el humo de segunda mano.
								</p>
								<a href="/cuestionario-sobre-el-estres" class="submit">Tome el cuestionario</a>
							</div>
						</div>
					</div>
				</div>
				<div class="back-link">
					<a href="#main" class="homelink" title="Anterior">Anterior. </a>
				</div>
            </li>
			
			<!-- Box 3 -->
            <li id="yo-tengo-antojos-de-tabaco" class="box orange">
				<div class="box-container">
					<div class="box-header">
						<div class="box-title">
							<h2>Yo tengo antojos de tabaco.</h2>
						</div>
						<div class="box-back-link">
							<a href="#main" class="homelink" title="Anterior">Anterior. </a>
						</div>
						<div class="col_1_of_3_cols">
							<div class="span_2_of_5">
								<div class="img-container"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo3.jpg" 
										alt="familia feliz" 
										/>
								</div>
							</div>
							<div class="span_3_of_5">
								<div class="quote">
									<blockquote>
										<strong>&quot;</strong>Los antojos son 
										intensos pero solo por unos minutos. 
										Pase el tiempo leyendo o masticando 
										chicle. &iexcl;T&uacute; lo puedes 
										vencer!<strong>&quot;</strong>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
					<div class="col_2_of_3_cols">
						<div class="span_2_of_5">
							<div class="description">
								<strong>Maneje sus antojos de fumar. </strong>
								<p>
									Aprenda que puede hacer cuando tenga deseos de fumar.
								</p>
							</div>
						</div>
						<div class="span_3_of_5">
							<div class="related-links">
								<ul>
									<li><a href="/antojos">Antojos
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Un bloc de notas." 
												class="image-notepad"
												/>
										</a>
									</li>
									<li><a href="/explore-medicamentos">Explore medicamentos
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una estrella." 
												class="image-star"
												/>
										</a>
									</li>
									<li class="last-link"
										><a href="/sintomas-de-abstinencia"
											>S&iacute;ntomas de abstinencia 
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una marca de verificaci&oacute;n." 
												class="image-checkmark"
												/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col_3_of_3_cols">
						<div class="col_3_of_4_cols">
							<div class="poll">
								<!--
								<h3>Encuesta</h3>
								<?php
								/*$block = bootstrap_poll_block_view('',35);
								print render($block['content']); */
								?>
								-->
								<div class="img-container">
									<a href="/smokefreetxt-espanol" 
										title="SmokefreeTXT en español">
										<img src="/<?php echo path_to_theme(); ?>/images/home/smokefreetxt.png" 
											alt="Smokefree text en español" 
										/>
									</a>
								</div>
								<strong>
									<a href="/smokefreetxt-espanol">Usa tu celular para dejar de fumar</a> 
								</strong>
								<p>
									<a href="/smokefreetxt-espanol">
										Obtenga animo, consejos y ayuda para dejar 
										y mantenerse sin fumar. <!--Para suscribirse, -->
										Mande <em>LIBRE</em> al 47848 desde su celular<!-- o 
										haga clic abajo-->.
									</a>
								</p>
								
								<a class="form-submit" href="/smokefreetxt-espanol">Suscribirse</a>
								
								<small>
								Pueden aplicarse cargos por mensajes y datos.
								Responde PARE para dejar de recibir mensajes, o AYUDA para recibir informacion. Enviamos un maximo de cinco mensajes por dia.
								</small>
								<!--<a href="/smokefreetxt-espanol" class="form-submit">Suscribirse</a>-->
							</div>
						</div>
						<div class="col_4_of_4_cols">
							<div class="quiz">
								<h3>Cuestionario</h3>
								<p>
									Conozca cu&aacute;l es su nivel de abstinencia del 
									cigarrillo y c&oacute;mo tratarlo.
								</p>
								<a href="/cuestionario-sobre-la-abstinencia-del-cigarrillo" 
									class="submit">Tome el cuestionario</a>
							</div>
						</div>
					</div>
				</div>
				<div class="back-link">
					<a href="#main" class="homelink" title="Anterior">Anterior. </a>
				</div>
            </li>
			
			<!-- Box 4 -->
            <li id="me-deslice" class="box blue">
				<div class="box-container">
					<div class="box-header">
						<div class="box-title">
							<h2>Me deslic&eacute;</h2>
						</div>
						<div class="box-back-link">
							<a href="#main" class="homelink" title="Anterior">Anterior. </a>
						</div>
						<div class="col_1_of_3_cols">
							<div class="span_2_of_5">
								<div class="img-container"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo5.jpg" 
										alt="hombre serio" 
										/>
								</div>
							</div>
							<div class="span_3_of_5">
								<div class="quote">
									<blockquote>
										<strong>&quot;</strong>As&iacute; que se 
										desliz&oacute;. No sea demasiado duro 
										consigo mismo. Identifique lo que le 
										hizo deslizar y vuelva al 
										camino.<strong>&quot;</strong>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
					<div class="col_2_of_3_cols">
						<div class="span_2_of_5">
							<div class="description">
								<strong>Deslices ocurren. </strong>
								<p>
									Supere los deslices r&aacute;pidamente.
								</p>
							</div>
						</div>
						<div class="span_3_of_5">
							<div class="related-links">
								<ul>
									<li><a href="/deslices">Deslices
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Un bloc de notas." 
												class="image-notepad"
												/>
										</a>
									</li>
									<li><a href="/para-seguir-sin-fumar">Mant&eacute;ngase libre del humo
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Un calendario." 
												class="image-calendar"
												/>
										</a>
									</li>
									<li class="last-link"><a href="/hable-con-un-experto">Hable con un experto
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una cara feliz." 
												class="image-happy"
												/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col_3_of_3_cols">
						<div class="col_3_of_4_cols">
							<div class="poll">
								<!--
								<h3>Encuesta</h3>
								<?php
								/*$block = bootstrap_poll_block_view('',36);
								print render($block['content']); */
								?>
								-->
								<div class="img-container">
									<a href="/smokefreetxt-espanol" 
										title="SmokefreeTXT en español">
										<img src="/<?php echo path_to_theme(); ?>/images/home/smokefreetxt.png" 
											alt="Smokefree text en español" 
										/>
									</a>
								</div>
								<strong>
									<a href="/smokefreetxt-espanol">Usa tu celular para dejar de fumar</a> 
								</strong>
								<p>
									<a href="/smokefreetxt-espanol">
										Obtenga animo, consejos y ayuda para dejar 
										y mantenerse sin fumar. <!--Para suscribirse, -->
										Mande <em>LIBRE</em> al 47848 desde su celular<!-- o 
										haga clic abajo-->.
									</a>
								</p>
								
								<a class="form-submit" href="/smokefreetxt-espanol">Suscribirse</a>
								
								<small>
									Pueden aplicarse cargos por mensajes y datos.
									Responde PARE para dejar de recibir mensajes, o AYUDA para recibir informacion. Enviamos un maximo de cinco mensajes por dia.
								</small>
								<!--<a href="/smokefreetxt-espanol" class="form-submit">Suscribirse</a>-->
							</div>
						</div>
						<div class="col_4_of_4_cols">
							<div class="quiz">
								<h3>Cuestionario </h3>
								<p>
									&iquest;El estr&eacute;s est&aacute; haciendo 
									que tenga ganas de fumar? &iquest;Qu&eacute; 
									tan estresado est&aacute; usted? &iexcl;Tome el 
									cuestionario! 
								</p>
								<a href="/cuestionario-sobre-el-estres" 
									class="submit">Tome el cuestionario</a>
							</div>
						</div>
					</div>
				</div>
				<div class="back-link">
					<a href="#main" class="homelink" title="Anterior">Anterior. </a>
				</div>
            </li>
			
			<!-- Box 5 -->
            <li id="quiero-proteger-a-mi-familia" class="box orange">
				<div class="box-container">
					<div class="box-header">
						<div class="box-title">
							<h2>Quiero proteger a mi familia.</h2>
						</div>
						<div class="box-back-link">
							<a href="#main" class="homelink" title="Anterior">Anterior. </a>
						</div>
						<div class="col_1_of_3_cols">
							<div class="span_2_of_5">
								<div class="img-container"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo6.jpg" 
										alt="familia feliz" 
										/>
								</div>
							</div>
							<div class="span_3_of_5">
								<div class="quote">
									<blockquote>
										<strong>&quot;</strong>Hay muchas 
										razones para dejar de fumar. 
										Mantener la seguridad de su 
										familia podr&iacute;a ser la 
										m&aacute;s importante.<strong>&quot;</strong>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
					<div class="col_2_of_3_cols">
						<div class="span_2_of_5">
							<div class="description">
								<strong>De un buen ejemplo. </strong>
								<p>
									Parar de fumar esta en sus manos.
								</p>
							</div>
						</div>
						<div class="span_3_of_5">
							<div class="related-links">
								<ul>
									<li><a href="/impacto-sobre-los-demas">Impacto en otros
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una estrella." 
												class="image-star"
												/>
										</a>
									</li>
									<li><a href="/humo-de-segunda-mano">Humo de segunda mano
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una marca de verificaci&oacute;n." 
												class="image-checkmark"
												/>
										</a>
									</li>
									<li class="last-link"><a href="/motivos-para-dejar-de-fumar">Razones para dejar de fumar
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Un bloc de notas." 
												class="image-notepad"
												/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col_3_of_3_cols">
						<div class="col_3_of_4_cols">
							<div class="poll">
								<!--
								<h3>Encuesta</h3>
								<?php
								/*$block = bootstrap_poll_block_view('',37);
								print render($block['content']); */
								?>
								-->
								<div class="img-container">
									<a href="/smokefreetxt-espanol" 
										title="SmokefreeTXT en español">
										<img src="/<?php echo path_to_theme(); ?>/images/home/smokefreetxt.png" 
											alt="Smokefree text en español" 
										/>
									</a>
								</div>
								<strong>
									<a href="/smokefreetxt-espanol">Usa tu celular para dejar de fumar</a> 
								</strong>
								<p>
									<a href="/smokefreetxt-espanol">
										Obtenga animo, consejos y ayuda para dejar 
										y mantenerse sin fumar. <!--Para suscribirse, -->
										Mande <em>LIBRE</em> al 47848 desde su celular<!-- o 
										haga clic abajo-->.
									</a>
								</p>
								
								<a class="form-submit" href="/smokefreetxt-espanol">Suscribirse</a>
								
								<small>
									Pueden aplicarse cargos por mensajes y datos.
									Responde PARE para dejar de recibir mensajes, o AYUDA para recibir informacion. Enviamos un maximo de cinco mensajes por dia.
								</small>
								<!--<a href="/smokefreetxt-espanol" class="form-submit">Suscribirse</a>-->
							</div>
						</div>
						<div class="col_4_of_4_cols">
							<div class="quiz">
								<h3>Cuestionario</h3>
								<p>
									Aseg&uacute;rese de que 
									est&aacute; manteniendo segura 
									a su familia. Averig&uuml;e 
									cu&aacute;nto sabe sobre el 
									humo de segunda mano. 
								</p>
								<a href="/cuestionario-sobre-el-humo-de-segunda-mano" 
									class="submit">Tome el cuestionario</a>
							</div>
						</div>
					</div>
				</div>
				<div class="back-link">
					<a href="#main" class="homelink" title="Anterior">Anterior. </a>
				</div>
            </li>
            
			<!-- Box 6 -->
            <li id="yo-fumo-a-veces" class="box green">
				<div class="box-container">
					<div class="box-header">
						<div class="box-title">
							<h2>Yo fumo a veces.</h2>
						</div>
						<div class="box-back-link">
							<a href="#main" class="homelink" title="Anterior">Anterior. </a>
						</div>
						<div class="col_1_of_3_cols">
							<div class="span_2_of_5">
								<div class="img-container"
									><img class="photo"
										src="/<?php echo path_to_theme(); ?>/images/home/smokefree-homepage-photo7.jpg" 
										alt="pareja jove" 
										/>
								</div>
							</div>
							<div class="span_3_of_5">
								<div class="quote">
									<blockquote>
										<strong>&quot;</strong>No 
										importa cu&aacute;nto fume, 
										cada cigarrillo lo afecta 
										a usted y a sus seres queridos. 
										Deje de fumar por si mismo. 
										Deje de fumar por 
										ellos.<strong>&quot;</strong>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
					<div class="col_2_of_3_cols">
						<div class="span_2_of_5">
							<div class="description">
								<strong>No existe un nivel de fumar que sea saludable. </strong>
								<p>
									Aprenda sobre los efectos 
									de fumar poco y 
									de no fumar a diario.
								</p>
							</div>
						</div>
						<div class="span_3_of_5">
							<div class="related-links">
								<ul>
									<li><a href="/fumar-leve-y-ocasionalmente">Fumar poco y ocasionalmente
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una marca de verificaci&oacute;n." 
												class="image-checkmark"
												/>
										</a>
									</li>
									<li><a href="/impacto-sobre-los-demas">Impacto en otros
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Un bloc de notas." 
												class="image-notepad"
												/>
										</a>
									</li>
									<li class="last-link"><a href="/efectos-de-la-salud">Efectos a la salud
											<img src="/<?php echo path_to_theme(); ?>/images/content/spacer.png" 
												alt="Una cara feliz." 
												class="image-happy"
												/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col_3_of_3_cols">
						<div class="col_3_of_4_cols">
							<div class="poll">
								<!--
								<h3>Encuesta</h3>
								<?php
								/*$block = bootstrap_poll_block_view('',39);
								print render($block['content']); */
								?>
								-->
								<div class="img-container">
									<a href="/smokefreetxt-espanol" 
										title="SmokefreeTXT en español">
										<img src="/<?php echo path_to_theme(); ?>/images/home/smokefreetxt.png" 
											alt="Smokefree text en español" 
										/>
									</a>
								</div>
								<strong>
									<a href="/smokefreetxt-espanol">Usa tu celular para dejar de fumar</a> 
								</strong>
								<p>
									<a href="/smokefreetxt-espanol">
										Obtenga animo, consejos y ayuda para dejar 
										y mantenerse sin fumar. <!--Para suscribirse, -->
										Mande <em>LIBRE</em> al 47848 desde su celular<!-- o 
										haga clic abajo-->.
									</a>
								</p>
								
								<a class="form-submit" href="/smokefreetxt-espanol">Suscribirse</a>
								
								<small>
								Pueden aplicarse cargos por mensajes y datos.
								Responde PARE para dejar de recibir mensajes, o AYUDA para recibir informacion. Enviamos un maximo de cinco mensajes por dia.
								</small>
								<!--<a href="/smokefreetxt-espanol" class="form-submit">Suscribirse</a>-->
							</div>
						</div>
						<div class="col_4_of_4_cols">
							<div class="quiz checklist">
								<h3>Lista</h3>
								<p>
									&iquest;Qu&eacute; desencadena su deseo de fumar? 
									Use este cuestionario para grabar sus desencadenantes de fumar 
									y desarrollar estrategias para manejarlos.
								</p>
								<a href="/desencadenantes-del-cigarrillo" 
									class="submit">Complete la lista</a>
							</div>
						</div>
					</div>
				</div>
				<div class="back-link">
					<a href="#main" class="homelink" title="Anterior">Anterior. </a>
				</div>
            </li>
		</ul>
	</div>
	
<?php 
/* Interior page */
else : ?>
	<div class="main-container container">
		<div class="row-fluid span12">
			<div class="span9 content-container <?php if(isset($node) && !empty($node) && $node->type == 'page' && empty($node->field_related_image['und'][0])) { print 'no-sidebar'; } ?>">
				<div class="<?php print _bootstrap_content_span($columns); ?> content-container page-content-container">  
					
					<?php print render($title_prefix); ?>
					
					<a id="content" name="content"></a>
				<?php 
				
				 /* If there is a page title... */
				if (!empty($title)): ?>
				
					<!-- Page title -->
					<div class="page-header-div">
						<div class="syndicate">
							<h1 class="page-header"><?php print $title; ?></h1>
						</div>
					
					<?php

					/* If this is an actual page... */
					if(isset($node) 
						&& !empty($node) 
						&& ($node->type == 'page' || $node->type =='webform')): ?>
						
						<!-- AddThis Button BEGIN -->
						<a href="#"
							title="Compartir"
							class="addthis_button_compact"
							addthis:url="<?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>"
							addthis:title="<?php echo $title . " | " . $site_name; ?>"
							addthis:description="<?php echo !empty($node->metatags["und"]["description"]["value"]) ? $node->metatags["und"]["description"]["value"] : ''; ?>"
							addthis:services_compact="facebook,twitter,google_plusone_share,linkedin,favorites,email,print,more"
							addthis:data_ga_tracker="<?php echo (($_SERVER['HTTP_HOST'] == "espanol.smokefree.gov") ? "UA-29170723-3" : "UA-29170723-2"); ?>"
							addthis:data_track_clickback="false"
							addthis:services_exclude="gmail,google,stumbleupon"
							addthis:services_expanded="email,print,more"
							addthis:ui_508_compliant="true"
							addthis:ui_click="true"
							addthis:ui_language="es"
							><img src="/<?php echo path_to_theme(); ?>/images/content/share-button.png" 
								alt="Compartir" 
								lang="es" /></a>
						<!-- AddThis Button END -->
					<?php endif; ?>
					
					</div>
				<?php endif; ?>
				
					<?php print render($title_suffix); ?>
				
				<?php if (!empty($action_links)): ?>
					<ul class="action-links">
						<?php print render($action_links); ?>
					</ul>
				<?php endif; ?>
				
				<?php if(isset($node) && !empty($node) && $node->type =='webform' && !empty($messages)): ?>
					<br />
					<div class="errors"><?php print $messages; ?></div>
				<?php endif; ?>
				
					<div class="syndicate">
						<?php print render($page['content']); ?>
					</div>
				
					<?php print render($page['below_content']); ?>
				
				</div>
			</div> <!-- end span 9 -->
		<?php if(isset($node) && !empty($node) && $node->type=='page' && !empty($node->field_related_image['und'][0])): ?>
			<aside class="span3" role="complementary">
			<?php if(isset($node) && !empty($node) && $node->type=='page' && !empty($node->field_related_image['und'][0])): ?>
				<div class="image-area">
					<div  class="sidebar-image">
						<img alt="<?php print $node->field_related_image['und'][0]['alt']; ?>" 
							src="/<?php print conf_path(); ?>/files/<?php print $node->field_related_image['und'][0]['filename']; ?>" 
							/>
					</div>
				</div>
			<?php endif; ?>
			<?php if (!empty($node->field_related_links)): ?>
				<div class="link-area">
					<ul>
					<?php if (!empty($node->field_related_links['und']['0'])): ?>
						<li class="li-first"><a href="<?php print $node->field_related_links['und']['0']['url']; ?>" title="<?php print $node->field_related_links['und']['0']['title']; ?>">
							<div class="sidebar-link">
								<h2><?php print $node->field_related_links['und']['0']['title']; ?></h2>
									<p><?php print $node->field_related_link_descriptions['und']['0']['value']; ?></p>
							</div>
							<div class="image-note"></div>
						</a></li>
					<?php endif; ?>
					<?php if (!empty($node->field_related_links['und']['1'])): ?>
						<li class="li-second"><a href="<?php print $node->field_related_links['und']['1']['url']; ?>" title="<?php print $node->field_related_links['und']['1']['title']; ?>">
							<div class="sidebar-link">
								<h2><?php print $node->field_related_links['und']['1']['title']; ?></h2>
									<p><?php print $node->field_related_link_descriptions['und']['1']['value']; ?></p>
							</div>
							<div class="image-note"></div>
						</a></li>
					<?php endif; ?>
					<?php if (!empty($node->field_related_links['und']['2'])): ?>
						<li class="li-third"><a href="<?php print $node->field_related_links['und']['2']['url']; ?>" title="<?php print $node->field_related_links['und']['2']['title']; ?>">
							<div class="sidebar-link">
								<h2><?php print $node->field_related_links['und']['2']['title']; ?></h2>
									<p><?php print $node->field_related_link_descriptions['und']['2']['value']; ?></p>
							</div>
							<div class="image-note"></div>
						</a></li>
					<?php endif; ?>
					</ul>
				</div>
			<?php endif; ?>
			</aside>
		<?php endif; ?>
		</div> <!-- end row -->
	</div> <!-- end main container -->
<?php endif; ?>

<!--  Begin logo bar -->
	<div class="logobar">
		<div class="logobar half-width">
			<div class="social-container">
				<div class="logobar social">
					<div class="pinterest-icon">
						<a href="https://www.pinterest.com/SFEspanol" 
							title="Pinterest"
							><img src="/<?php echo path_to_theme(); ?>/images/footer/sfe-pinterest.png" 
								alt="Pinterest" />
						</a>
						<span class="externalllinktooltip-facebook">Enlace externo – Por favor revise nuestra
							<a href="/exoneracion-legal-de-enlace-externo">salida del sitio</a>
						</span>
					</div>
					
					<div class="twitter-icon">
						<a href="https://twitter.com/SmokeFreeUs" 
								title="Twitter"
								><img src="/<?php echo path_to_theme(); ?>/images/footer/sfe-ftr2-twitter-46x34.png" 
									alt="Twitter" />
						</a>
						<span class="externalllinktooltip-twitter">Enlace externo – Por favor revise nuestra
							<a href="/exoneracion-legal-de-enlace-externo">salida del sitio</a>
						</span>
					</div>					
				</div>
			</div>
			<div class="links-container-txt">
				<div class="logobar links">
					<a href="/smokefreetxt-espanol"
						class="logobar links" 
						title="SmokefreeTXT">
						<div class="smokefree-txt-icon">
							<img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr3-smokefreetxt-36x34.png" alt="SmokefreeTXT" />
						</div>
						<div class="smokefree-txt-text">
							<p><span title="Smoke-Free Text">SmokefreeTXT</span></p>
						</div>
					</a>
				</div>
			</div>
			<div class="links-container-qp">
				<div class="logobar links">
					<a href="/preparacion-de-un-plan-para-dejar-de-fumar" class="logobar links" title="Plan Para Dejar">
						<div class="quit-plan-icon">
						<img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr4-quit-plan-36x34.png" 
								alt="Plan Para Dejar" />
						</div>
						<div class="quit-plan-text">	
							<p>Plan Para Dejar</p>
						</div>
					</a>
				</div>
			</div>
		</div> <!-- end half-width -->

		<div class="logobar half-width-sites">
			<div class="sites-container smokefree-women">
				<div class="logobar sites">
					<a href="http://women.smokefree.gov" 
						><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr5-sf-women-144x34.png" 
							alt="Smokefree Women" /></a>
				</div>
				<div class="logobar tablet-sites">
					<a href="http://women.smokefree.gov" 
						><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr5-sf-women-68x34.png" 
							alt="Smokefree Women"/></a>
				</div>
			</div>
			<div class="sites-container smokefree-teen">        
				<div class="logobar sites"
					><a href="http://teen.smokefree.gov" 
						><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr6-sf-teen-144x34.png" 
							alt="Smokefree Teen" /></a>
				</div>
				<div class="logobar tablet-sites"
					><a href="http://teen.smokefree.gov" 
						><img src="/<?php echo path_to_theme() ;?>/images/footer/smokefree-ftr6-sf-teen-68x34.png" 
							alt="Smokefree Teen" /></a>
				</div>
			</div>
			<div class="sites-container smokefree">
				<div class="logobar sites"
					><a href="http://smokefree.gov" 
						><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr7-sf-gov-144x34.png" 
							alt="Smokefree.gov" /></a>
				</div>
				<div class="logobar tablet-sites"
					><a href="http://smokefree.gov" 
						><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr7-sf-gov-68x34.png" 
							alt="Smokefree.gov" /></a>
				</div>
			</div>
			<div class="sites-container smokefree">
				<div class="logobar sites"
				><a href="https://60plus.smokefree.gov"
					><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-ftr6-sf-60+-blue.144x34.png"
						  alt="60plus" /></a>
				</div>
				<div class="logobar tablet-sites"
				><a href="https://60plus.smokefree.gov"
					><img src="/<?php echo path_to_theme(); ?>/images/footer/smokefree-60plus-blue.68x34.png"
						  alt="60plus" /></a>
				</div>
			</div>
		</div> <!-- end half-width -->
	</div><!-- end logobar -->
	<div class="footer">
		<ul class="footer-links">
			<li><a href="/">inicio</a>&nbsp;<span>|</span></li>
			<li><a href="/sobre">sobre smokefree espa&ntilde;ol</a>&nbsp;<span>|</span></li>
			<li><a href="http://www.cancer.gov/espanol/global/politicas/foia" title="Ley de Libre Acceso a la Información">FOIA</a>&nbsp;<span>|</span></li>
			<li><a href="/politica-de-privacidad">pol&iacute;tica de privacidad</a>&nbsp;<span>|</span></li>
			<li><a href="/accesibilidad">accesibilidad</a>&nbsp;<span>|</span></li>
			<li><a href="/ver-archivos">ver archivos</a>&nbsp;<span>|</span></li>
			<li><a href="/descargo-de-responsabilidad">descargo de responsabilidad</a>&nbsp;<span>|</span></li>
               <li><a href="/requisitos-para-utilizar-el-enlace">requisitos para utilizar el enlace</a></li>
 	    </ul>
		<ul class="footer-links">
			  <li><a href="http://women.smokefree.gov" title="Smokefree Women">women.smokefree.gov</a>&nbsp;<span>|</span></li>
			  <li><a href="http://teen.smokefree.gov" title="Smokefree Teen">teen.smokefree.gov</a>&nbsp;<span>|</span></li>
			  <li><a href="http://smokefree.gov" title="Smokefree.gov">smokefree.gov</a></li>
		</ul><!--<br/>-->
		
		<div id="search-footer">
			<form method="get" 
				action="https://barney2.cit.nih.gov/search"
				name="search"
				onsubmit="javascript:if (document.getElementById('searchbox-footer').value=='B&uacute;squeda' 
							|| document.getElementById('searchbox-footer').value=='') 
								return false;">
				<input type="hidden" name="site"            value="SMOKEFREE_ESPANOL" />
				<input type="hidden" name="client"          value="SMOKEFREE_ESPANOL_frontend" />
				<input type="hidden" name="proxystylesheet" value="SMOKEFREE_ESPANOL_frontend" />
				<input type="hidden" name="output"          value="xml_no_dtd" />
				<input type="hidden" name="filter"          value="0" />
				<input type="hidden" name="getfields"       value="*" />
				<label for="searchbox-footer" 
					class="hiddenSearch hidden">B&uacute;squeda</label>
				<div id="search-footer-container">
					<input id="searchbox-footer" 
						type="text" 
						name="q" 
						size="30" 
						maxlength="255"
						value="B&uacute;squeda"
						onfocus="javascript:if (this.value=='B&uacute;squeda') this.value='';"
						onblur="javascript:if (this.value == '') this.value ='B&uacute;squeda';"
						/>&nbsp;&nbsp;
					<input type="submit" 
						value="B&uacute;squeda" 	
						alt="B&uacute;squeda"
						class="search-button" 
						src="/<?php echo path_to_theme(); ?>/images/content/spacer.png"						
						/>
				</div>
			</form>
		</div>
		<ul class="footer-links">
			<li><a href="http://hhs.gov" title="Departamento de Salud y Servicios Humanos">Departamento de Salud y Servicios Humanos</a>&nbsp;<span>|</span></li>
			<li><a href="http://nih.gov" title="Institutos Nacionales de la Salud">Institutos Nacionales de la Salud</a>&nbsp;<span>|</span></li>
			<li><a href="http://cancer.gov/espanol" title="Instituto Nacional del C&aacute;ncer">Instituto Nacional del C&aacute;ncer</a>&nbsp;<span>|</span></li>
			<li><a href="http://www.usa.gov/gobiernousa/index.shtml" title="GobiernoUSA.gov">GobiernoUSA.gov</a></li>
		</ul>      
		<div class="footer nih-copy">
			<p>NIH...Transformaci&oacute;n de Descubrimientos de la Salud&reg;</p>
		</div>
	</div><!-- end page footer -->
</div> <!-- end page container -->