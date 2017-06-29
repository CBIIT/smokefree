<?php

/**
	For use with the webforms on the SmokeFree Espanol Site
*/
/**
 * @file
 * Customize confirmation screen after successful submission.
 *
 * This file may be renamed "webform-confirmation-[nid].tpl.php" to target a
 * specific webform e-mail on your site. Or you can leave it
 * "webform-confirmation.tpl.php" to affect all webform confirmations on your
 * site.
 *
 * Available variables:
 * - $node: The node object for this webform.
 * - $confirmation_message: The confirmation message input by the webform author.
 * - $sid: The unique submission ID of this submission.
 */
?>
<?php

	//this function returns the choices for a given quiz number
	function get_choices($counter){
		if($counter >0){
			$choices = $node->webform['components'][$counter]['extra']['items'];
		}
		return $choices;
	}
	//This function returns the correct answers to each question
	function secondhand_answers($counter, $response){
		//set up a class for correct/incorrect answers
		if($response ==true) {
			$class= 'correct';
			$alt = 'Correct Answer';
		}
		else {
			$class = 'incorrect';
			$alt = 'Incorrect Answer';
		}
		//display answers based on the question being asked
		switch($counter){
			case 1:
				return "<p>
				<ul>
					<li> El humo que expulse una persona cuando fuma un cigarrillo</li>
					<li> La contaminación proveniente de las chimeneas industriales, las fábricas y los escapes de los carros</li>
					<li> El humo que proviene del extremo encendido de un cigarrillo</li>
					<li> A y C</li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta correcta: <strong>A y C.</strong> El humo de segunda mano es la combinación del humo que proviene de un cigarrillo y el que exhala un fumador. Puede permanecer en el aire por varias horas, de modo que es mejor preferir lugares en los que no se permite fumar.</p></div>";
			break;

			case 2:
				return "<p>
				<ul>
					<li>Verdadero</li>
					<li>Falso</li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta correcta: <strong>Falso.</strong> Aunque las exposiciones al humo de segunda mano sean breves, pueden provocar un tipo de daño celular que desencadena un proceso canceroso.</p></div>";
			break;

			case 3:
				return "<p>
				<ul>
					<li>Verdadero</li>
					<li>Falso</li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta correcta: <strong>Verdadero.</strong> El humo de segunda mano contiene más de 7,000 sustancias químicas. Cientos de ellas son tóxicas y unas 70 pueden causar cáncer.</p></div>";
			break;

			case 4:
				return "<p>
				<ul>
					<li> Infecciones de oído</li>
					<li> Crisis asmáticas graves y frecuentes</li>
					<li> Bronquitis y neumonía</li>
					<li> Todas las anteriores</li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta correcta: <strong>Todas las anteriores.</strong> El humo de segunda mano causa muchos problemas de salud en lactantes y niños. Una de las medidas más importantes que las personas pueden tomar para proteger su salud y la salud de sus niños es tener un hogar sin humo.</p></div>";
			break;

			case 5:
				return "<p>
				<ul>
					<li> Amoníaco, usado en los productos fertilizantes y de limpieza</li>
					<li> Arsénico, usado en las baterías de los carros</li>
					<li> Cianuro, usado para disolver el oro y la plata</li>
					<li> Formaldehido, usado en el aislante y en la impresión de fotos</li>
					<li>Todas las anteriores</li>
					<li>Ninguna de las anteriores</li>
				</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta correcta: <strong>Todas las anteriores.</strong> Aprenda cómo puede proteger a su familia de los peligros del humo de segunda mano en nuestra sección sobre humo de segunda mano Secondhand Smoke.</p></div>";
			break;

			case 6:
				return "<p>
				<ul>
					<li> Verdadero</li>
					<li> Falso</li>
				</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta correcta: <strong>Falso.</strong> No existe una cantidad de humo de segunda mano que sea inocua. La opción más segura es mantenerse totalmente alejado del humo.</p></div>";
			break;

			case 7:
				return "<p>
				<ul>
					<li>True</li>
					<li>False</li>
				</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta correcta: <strong>Falso.</strong> El humo de segunda mano puede viajar a través de las brechas de los zócalos de las paredes, a través de las unidades de iluminación y entrar y salir por las puertas. Aunque una habitación esté ventilada, el humo de segunda mano se puede quedar en el aire durante horas.</p></div>";
			break;

			case 8:
				return "<p>
				<ul>
					<li> Los efectos son inmediatos</li>
					<li> 30 minutos</li>
					<li> 3 horas</li>
					<li>d) 8 horas </li>
				</ul></p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta correcta: <strong>No hay un nivel de contacto con el humo de segunda mano que sea inocuo;</strong> hasta la exposición breve puede ser nociva para la salud.</p></div>";
			break;

			case 9:
				return "<p>
				<ul>
					<li> Tasas de cáncer de pulmón</li>
					<li> Neumonía lo suficientemente grave para requerir admisión al hospital</li>
					<li> Infartos</li>
					<li> Resfríos y gripe entre personas que trabajan en restaurantes</li>
				</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta correcta: <strong>Infartos</strong> La prohibición de fumar ha demostrado que disminuye los infartos. Cada vez hay más estados que tienen leyes que prohíben fumar en espacios cerrados.</p></div>";
			break;

			case 10:
				return "<p>
					<ul>
						<li> Prohibir que se fume en su carro o casa</li>
						<li> Evitar los lugares que permiten fumar en espacios cerrados</li>
						<li> Participar en campañas comunitarias para eliminar el humo</li>
						<li> Todas las anteriores</li>
					</ul>
				</p>
				<div class='answer-image ". $class ."'> <img src='/". path_to_theme() . "/images/content/spacer.png' alt='". $alt ."' /></div>
				<div class='real-answer'><p>Respuesta de correcta: <strong> Todas las anteriores.</strong> Cuando sea posible, prefiera los lugares y las personas sin humo. Si sus amigos o familiares fuman, pídales que lo hagan afuera.</p></div>";
			break;
		}
	}

	//this function contains code to check the answer for the secondhand quiz.  It looks at the value the user submitted, compares it against the correct answer, and returns either true or false.
	function check_answer_secondhand($counter, $submission){
		if($counter){
			switch($counter){
				case 1:
					if(strtolower($submission->data[$counter][0])=='d'){
						return true;
					}
					else
						return false;
				break;

				case 2:
					if(strtolower($submission->data[$counter][0])=='f'){
							return true;
					}
					else
						return false;
				break;

				case 3:
					if(strtolower($submission->data[$counter][0])=='v'){
							return true;
					}
					else
						return false;
				break;

				case 4:
					if(strtolower($submission->data[$counter][0])=='d'){
							return true;
					}
					else
						return false;
				break;

				case 5:
					if(strtolower($submission->data[$counter][0])=='a'){
							return true;
					}
					else
						return false;
				break;

				case 6:
					if(strtolower($submission->data[$counter][0])=='e'){
							return true;
					}
					else
						return false;
				break;

				case 7:
					if(strtolower($submission->data[$counter][0])=='f'){
							return true;
					}
					else
						return false;
				break;

				case 8:
					if(strtolower($submission->data[$counter][0])=='a'){
							return true;
					}
					else
						return false;
				break;

				case 9:
					if(strtolower($submission->data[$counter][0])=='d'){
							return true;
					}
					else
						return false;
				break;

				case 10:
					if(strtolower($submission->data[$counter][0])=='c'){
							return true;
					}
					else
						return false;
				break;

				default:
					return false;
				break;
			}
		}
	}

	//calculates interest based on the number of years
	function calculate_interest($years, $price){
		$interest = .06; //default interest
		$i = 1;
		$amount = 0;
		$price = $price * 365;
		$amount = $price;
		while($i <= $years){
			$add = $amount * $interest;
			if ($i>1)
			$amount += $price + $add;
			$i++;
		}
		return $amount;
	}

?>
<?php  include_once drupal_get_path('module','webform') . '/includes/webform.submissions.inc';  //include file required to get submission info ?>
<?php $submission = webform_get_submission($node->nid, $sid); //get the current submission data ?>
<?php
	if($node->nid == 25 || $node->nid == 22):
		$quiz = $node->nid; //id of the current webform
		$score = 0;
		//iterate through all the answers, running each answer through the calculate score function and then adding the value to $score
		foreach(array($submission->data) as $data) {
			foreach($data as $question){
				$score += $question[0];
			}
		}

	endif;
//print_r($submission);
 ?>
 <?php
 //The scoring for the depression quiz is wacky.  You can see how it works at http://www.ids-qids.org/index2.html#table2
	if($node->nid==19) :
		$sleep = 0;
		$weight = 0;
		$psychomotor = 0;
		$mdd = 0;
		$i = 1;
		$j = 0;
		//count the number of values
		foreach(array($submission->data) as $data){
			$count = count($data);
			foreach($data as $question){
				if($i >=1 && $i < 5) {
					if ($question[0] > $sleep) {
						$sleep = $question[0];
					}
				}
				elseif($i >= 6 && $i < 10) {
					if($question[0] > $weight) {
						$weight = $question[0];
					}
				}
				elseif( $i ==($count-1) || $i == $count) {
					if($question[0] > $psychomotor) {
						$psychomotor = $question[0];
					}
				}
				else {
					$mdd += $question[0];
				}
				$i++;
			}
		}
		$depression_score = $sleep + $weight + $psychomotor + $mdd;
	endif;
?>
<div class="webform-confirmation">
	<!-- Markup for Depression quiz -->
	<?php if($node->nid ==19): ?>

		<div id="depression">
			<div class="score">
				<p><strong>Su puntuación es: <?php print $depression_score; ?></strong></p>
			</div>
				<?php if ($depression_score <=5): ?>
				<div class="depression-1">
					<p>
						<strong>Puntuación de 0-5: Severidad de la Depresión: Ninguna. </strong>
					</p>
					<p>Esta puntuación sugiere que usted no tiene ningún síntoma mayor de depresión. Si usted se siente bajo de ánimos y triste es posible que esto se deba a un par de días malos o cambios leves en su estado de ánimo por haber dejado de fumar. Si es así, estos sentimientos desaparecerán dentro de los siguientes días. Sin embargo, si usted está preocupado o si estos síntomas duran más de dos semanas quizás sería buena idea que usted compartiera con otras personas como se está sintiendo.</p>
				</div>
				<?php endif; ?>
				<?php if($depression_score >5 && $depression_score <= 10): ?>
				<div class="depression-2">
					<p><strong>Puntuación de 6-10: Severidad de Depresión: Leve.</strong>   Esta puntuación sugiere que usted tiene algunos síntomas de depresión. Es posible que actualmente los síntomas no le estén causando problemas en su vida diaria pero están presentes y es probable que usted se dé cuenta de ello. Le sugeriríamos que intente buscar otras formas para mejorar su estado de ánimo. Quizás debería considerar hablar con sus amigos, familiares o su doctor.</p>
					<p>Le sugeriríamos que mantenga un registro o haga un seguimiento de cómo se va sintiendo y de sus síntomas. Usted podría escribirlos o podría tomar este mismo cuestionario cada día o regularmente. Si observa que su puntuación de depresión incrementa, eso significa que su estado de ánimo está empeorando o que estos síntomas le están causando problemas en su vida. Sería recomendable que hablará con su doctor y encuentre otros tipos de ayuda para reducir estos síntomas.	</p>
				</div>
				<?php endif; ?>
				<?php if($depression_score >10 && $depression_score <= 15): ?>
			   <div class="depression-3">
					<p><strong>Puntuación de 11-15: Severidad de Depresión: Moderada.</strong>  Esta puntuación sugiere que usted tiene síntomas importantes de depresión. No dejé que el término nivel “moderado” de depresión le engañe. Actualmente, es probable que los síntomas le estén causando problemas en su vida diaria. Quizás sean aún problemas más grandes de lo que usted imagina, causándole problemas para hacerse cargo de sus responsabilidades y de disfrutar de la vida en general. A este nivel, le recomendamos que busqué ayuda inmediata. Consideré hablar con su doctor y buscar a un terapeuta. </p>
					<p>También considere hablar con amigos y familia sobre cómo se está sintiendo. Tener apoyo de otras personas es con frecuencia útil para encontrar nuevas formas para manejar la depresión. Cuando uno está deprimido es difícil encontrar la energía para tan sólo llamar al doctor. Hablar con otras personas sobre cómo se siente es una buena forma para recibir ayuda para encontrar un tratamiento y apoyo en esos momentos difíciles.</p>
				</div>
			   <?php endif; ?>
			   <?php if($depression_score >15 && $depression_score <=20): ?>
				<div class="depression-4">
					<p><strong>Puntuación de 16-20: Severidad de Depresión: Severa.</strong>  Esta puntuación sugiere que usted tiene muchos síntomas de depresión. Es importante que esto se lo tome seriamente. Es muy probable que los síntomas le causen grandes problemas en su vida diaria y que le sea extremadamente difícil encargarse de sus responsabilidades en su vida cotidiana. Es posible que sienta que está cargando un gran peso que le hace casi imposible llegar al final del día. Aún y cuando no se sienta agobiado por sus síntomas es importante que los empiece a controlar lo antes posible.</p>
					<p>En este nivel de depresión usted debe buscar activamente ayuda y apoyo. Cuando uno está deprimido puede ser difícil tener energía para hacer inclusive las tareas más mínimas que le ayuden a cuidarse. Llamé a su doctor o a un profesional de salud mental hoy mismo. Dígale a sus amigos y familiares cómo se está sintiendo.</p>
				</div>
				<?php endif; ?>
				<?php if($depression_score >20): ?>
				<div class="depression-5">
					<p><strong>Puntuación de 21-27: Severidad de Depresión: Muy Severa.</strong> Esta puntuación sugiere que usted tiene muchos síntomas de depresión. Es importante que esto se lo tome seriamente. Es muy probable que los síntomas le causen grandes problemas en su vida diaria y que le sea extremadamente difícil encargarse de sus responsabilidades en su vida cotidiana. Es posible que sienta que está cargando un gran peso que le hace casi imposible llegar al final del día. Aún y cuando no se sienta agobiado por sus síntomas es importante que los empiece a controlar lo antes posible.</p>
					<p>En este nivel de depresión usted debe buscar activamente ayuda y apoyo. Cuando uno está deprimido puede ser difícil tener energía para hacer inclusive las tareas más mínimas que le ayuden a cuidarse. Llamé a su doctor o a un profesional de salud mental hoy mismo. Dígale a sus amigos y familiares cómo se está sintiendo.</p>
				</div>
				<?php endif; ?>
				<div class="highlightBox">
				<p><em>NOTA: Esta información no tiene la intención de informarle si tiene una depresión mayor. Por lo tanto, no se puede reemplazar por una visita a un profesional de salud mental.</em></p>
					<p>Es común que las personas que se sienten mal piensen en hacerse daño a si mismas o piensen en la muerte. Si usted o alguien que usted conoce tiene estos sentimientos, esto significa que están en crisis y necesitan ayuda. Para obtener ayuda inmediata, llame al 1-888-628-9454. Usted recibirá asistencia en español de un centro de crisis, disponible las 24 horas del día. O bien, usted puede llamar al 911.</p>
					<p>Este número de teléfono está disponible todo el tiempo para brindar atención gratuita y confidencial a personas que están sufriendo una crisis. La <a href="http://samhsa.gov/">Administración de Salud Mental y Abuso de Sustancias</a> (conocida como SAMHSA por sus siglas en inglés), que es parte del Departamento de Salud y Servicios Humanos de los Estados Unidos, se encarga de la gestión de <a href="http://suicidepreventionlifeline.org">este centro de crisis.</a></p>
				</div>
			</div>
	<!-- End of Depression quiz markup -->
    <?php endif; ?>

	<!-- Medication/ Nicotine quiz markup -->
	<?php if($node->nid == 22): ?>
		<div id="medication">
			<?php if($score <=2): ?>
				<p>Su puntaje total es <strong><?php print $score; ?> puntos </strong> (nivel muy bajo de adicción, 0-2 puntos).</p>
				<p>Su cuerpo no depende demasiado de la nicotina. Es posible que las personas que no son tan dependientes de la nicotina no tengan muchos síntomas de abstinencia cuando dejan de fumar. Para obtener más información sobre los síntomas de abstinencia, visite nuestra página de <a href="/sintomas-de-abstinencia">síntomas de abstinencia.</a></p>
				<p>Aunque no tenga una dependencia fuerte de la nicotina, puede sentir fuertes deseos de fumar. Fumar es una adicción y las personas fuman por motivos físicos, mentales y emocionales. Es posible que se sienta tentado a fumar cuando esté aburrido, hablando por teléfono, estresado, platicando con otros fumadores o en otras situaciones cotidianas; conocer <a href="/por-que-es-dificil-dejar-de- fumar">sus desencadenantes</a> puede ayudarle a estar preparado para los antojos.</p>
				<p><a href="/apoyo-social">Obtener apoyo</a> de sus familiares, amigos o especialistas en dejar de fumar también es importante para que tenga éxito. Si necesita apoyo de forma inmediata, inscríbase en <a href="/smokefreetxt-espanol">SmokefreeTXT</a> o llame al 1-855-DÉJELO-YA para hablar con alguien capacitado para ayudar a dejar de fumar.</p>
			<?php endif; ?>
			<?php if($score >2 && $score <=4): ?>
				<p>su puntaje total es <strong><?php print $score; ?> puntos </strong> (Nivel de Adicción bajo, 3-4 puntos).</p>
				<p>Usted tiene poca dependencia de la nicotina, pero debe planificar con tiempo para poder lidiar con <a href="/antojos">los antojos</a> y los síntomas de abstinencia de nicotina. Quizás deba considerar usar <a href="/explore-medicamentos">medicamentos para dejar de fumar</a> junto con las otras estrategias que utilice. Para obtener más información sobre los síntomas de abstinencia, visite nuestra página <a href="/sintomas-de-abstinencia">de síntomas de abstinencia.</a></p>
				<p><a href="/apoyo-social">Obtener apoyo</a> de sus familiares, amigos o especialistas en dejar de fumar también es importante para que tenga éxito. Si necesita apoyo de forma inmediata, inscríbase en <a href="/smokefreetxt-espanol">SmokefreeTXT</a> o llame al 1-855-DÉJELO-YA para hablar con alguien capacitado para ayudar a dejar de fumar.</p>
			<?php endif; ?>
			<?php if($score == 5): ?>
				<p>Su puntaje total es <strong><?php print $score; ?> puntos</strong> (nivel medio de adicción, 5 puntos).</p>

				<p><strong>Usted es moderadamente dependiente de la nicotina. Considere usar medicamentos para ayudarle a dejar de fumar. Los medicamentos para dejar de fumar pueden ayudar a disminuir estos <a href="/sintomas-de-abstinencia">síntomas de abstinencia</a> y <a href="/antojos">antojos</a> mientras trata de dejar de fumar. Usar medicamentos para dejar de fumar también puede duplicar sus probabilidades de lograrlo. Vea <a href="/explore-medicamentos">nuestra guía de medicamentos</a> para obtener más información sobre medicamentos para dejar de fumar</strong></p>
				<p>Aunque use medicamentos, algunas veces sentirá la urgencia de fumar. Use otras estrategias para dejar de fumar junto con los medicamentos. La combinación de ambas cosas puede ayudarle a lidiar con los síntomas de abstinencia y los antojos.</p>
				<p><a href="/apoyo-social">Obtener apoyo</a> de sus familiares, amigos o especialistas en dejar de fumar también es importante para que tenga éxito. Si necesita apoyo de forma inmediata, inscríbase en <a href="/smokefreetxt-espanol">SmokefreeTXT</a> o llame al 1-855-DÉJELO-YA para hablar con alguien capacitado para ayudar a dejar de fumar.</p>
			<?php endif; ?>
			<?php if($score>5 && $score <=7): ?>
				<p>Su puntaje total es <strong><?php print $score; ?> puntos </strong> (nivel alto de adicción, 6-7 puntos).</p>
				<p><strong>Usted es muy dependiente de la nicotina. Averigüe sobre el uso de medicamentos para ayudarle a dejar de fumar. Estos medicamentos pueden reducir <a href="/antojos">los antojos</a> y duplicar las probabilidades de dejar de fumar para siempre. La mayoría de los medicamentos se venden sin receta. Vea la <a href="/explore-medicamentos">guía de medicación</a> para conocer más sobre ellos antes de ir a la farmacia.</strong></p>
				<p><strong>Aunque los medicamentos pueden ayudar a lidiar con los antojos, es común que haya momentos en los que le urja fumar. Fumar es una adicción y las personas fuman por motivos físicos, mentales y emocionales. Use otras estrategias para dejar de fumar junto con los medicamentos. Le ayudarán a lidiar con <a href="/sintomas-de-abstinencia">los síntomas de abstinencia</a> withdrawal y los <a href="/antojos">antojos</a>.</strong></p>
				<p><a href="/apoyo-social">Obtener apoyo</a> de sus familiares, amigos o especialistas en dejar de fumar también es importante para que tenga éxito. Si necesita apoyo de forma inmediata, inscríbase en <a href="/smokefreetxt-espanol">SmokefreeTXT</a> o llame al 1-855-DÉJELO-YA para hablar con alguien capacitado para ayudar a dejar de fumar.</p>
			<?php endif; ?>
		</div>
	<?php endif; ?>
	<!--End of medication quiz markup -->

	<!-- Withdrawal quiz markup -->
	<?php if($node->nid==25): ?>
		<div id="withdrawal">
			<div><p><strong> Su puntuación es: <?php print $score; ?> </p></strong></div>
			<?php if($score<=15): ?>
				<p><strong>Puntuaciones entre 0-15:</strong>Las puntuaciones en este rango sugieren que en el último día usted no tuvo o tuvo pocos síntomas de abstinencia. Si usted dejo de fumar hace un par de días, se dará cuenta que los síntomas de abstinencia aumentan en los próximos días. Si usted ha dejado de fumar hace ya varios días, es posible que usted esté por terminar la fase activa de síntomas de abstinencia y continuará sintiéndose mejor.</p>
				<p>Tome en cuenta que las ganas de fumar pueden continuar siendo un desafío por un buen tiempo. Asegúrese de tener un plan de cómo va a manejar las ganas de fumar, especialmente si están aparecen de forma inesperada. Consulté la guía online de dejar de fumar que contiene ideas que le pueden ayudar.</p>
			<?php endif; ?>
			<?php if($score >15 && $score <=30): ?>
				<p><strong>Puntuaciones entre 16-30:</strong>Puntuaciones en este rango sugieren que durante el último día usted tuvo síntomas de abstinencia leves. Si usted dejo de fumar hace un par de días, se dará cuenta que los síntomas de abstinencia aumentan en los próximos días. Si usted ha dejado de fumar hace ya varios días, es posible que usted esté por terminar la fase activa de síntomas de abstinencia y continuará sintiéndose mejor.</p>
				<p>Tome en cuenta que las ganas de fumar pueden continuar siendo un desafío por un buen tiempo. Asegúrese de tener un plan de cómo va a manejar las ganas de fumar, especialmente si están aparecen de forma inesperada. Consulté la guía online de dejar de fumar que contiene ideas que le pueden ayudar.</p>
			<?php endif; ?>
			<?php if($score >30 && $score <=45): ?>
				<p><strong>Puntuaciones entre 31-45:</strong> Puntuaciones en este rango sugieren que en el último día usted tuvo síntomas de abstinencia moderados. Si usted dejo de fumar hace un par de días, se dará cuenta que los síntomas de abstinencia aumentan en los próximos días. Recuerde que la mayoría de los síntomas de abstinencia mejoran en una semana o dos.</p>
				<p>Este nivel de síntomas puede causarle dificultades y es probable que usted se sienta incómodo o molesto. Si los síntomas le están causando problemas ahora que ha dejado de fumar, recuerde que hay ayuda disponible. Puede llamar a la línea quitline (dejar de fumar) y hablar con un consejero entrenado en cesación tabáquica (1-855-DÉJELO-YA). Este servicio es gratuito y ha demostrado que ayuda a la gente que quiere dejar de fumar. Si no es que ya lo está haciendo, también podría considerar otro tipo de tratamientos con medicaciones como la terapia de sustitución o reemplazo de nicotina (TSN). TSN ha demostrado disminuir los síntomas de abstinencia. </p>
				<p>¡Nuevamente recuerde que los síntomas de abstinencia desaparecerán! Usted se sentirá mejor. Tome en cuenta que las ganas de fumar pueden continuar siendo un desafío por un buen tiempo. Asegúrese de tener un plan de cómo va a manejar las ganas de fumar, especialmente si están aparecen cuando menos se lo espera. Consulté la guía online de dejar de fumar que contiene ideas que le pueden ayudar.</p>
			<?php endif; ?>
			<?php if($score >45 && $score <=60): ?>
				<p><strong>Puntuaciones entre 46-60:</strong>   Puntuaciones en este rango sugieren que usted tuvo síntomas de abstinencia severos en el último día. No importa que tan malos sean los síntomas de abstinencia, éstos desaparecerán con el tiempo. Recuerde que la mayoría de los síntomas de abstinencia mejoran en una o dos semanas.</p>
				<p>Este nivel de síntomas puede causarle dificultades y es probable que usted se sienta incómodo o molesto. Recuerde que hay ayuda disponible. Puede llamar a la línea quitline (dejar de fumar) y hablar con un consejero entrenado en cesación tabáquica (1-855-DÉJELO-YA). Este servicio es gratuito y ha demostrado que ayuda a la gente que quiere dejar de fumar. Si no es que ya lo está haciendo, también podría considerar otro tipo de tratamientos con medicaciones como la terapia de sustitución o reemplazo de nicotina (TSN). TSN ha demostrado disminuir los síntomas de abstinencia.</p>
			<?php endif; ?>
		</div>
	<?php endif; ?>
	<!-- End of withdrawal quiz markup -->

	<!-- Secondhand quiz markup -->
	<?php if($node->nid == 85): ?>
		<div id="secondhand">
		<?php $i=1;  //Start the counter at 2 since there is no zero value and the first component for the webform is the instructions markup. ?>
			<?php foreach($node as $question){ ?>
				<?php if($node->webform['components'][$i+1]['name']): ?>
					<?php $current_answer = check_answer_secondhand($i, $submission); ?>
					<div class="question-div">
						<strong><?php print $node->webform['components'][$i]['name']; //print the question ?></strong>
					</div>
					<div class="answers">
						<div class="correct-answer">
								<?php print secondhand_answers($i, $current_answer); ?>
						</div>
					</div>
				<?php endif; ?>
		<?php
			$i++;
		}?>
		</div>
	<?php endif; ?>
	<!--End of Secondhand quiz markup -->
	<!-- Stress Quiz Markup -->
	<?php
		if($node->nid ==24):
		$event = 0;
		$impact = 0;
		$i = 1;
		//count the number of events
		foreach(array($submission->data) as $data){
			foreach($data as $question){
				if($i ==1 || $i ==2) {
					$event += count($question);
				}
				else {
					$impact += $question[0];
				}
				$i++;
			}
		}
	?>
		<div id="stress">
			<p><strong>El número total de eventos estresantes es: <?php print $event; ?></strong></p>
			<p><strong>Su puntuación de impacto es: <?php print $impact; ?></strong></p>
			<p>Las puntuaciones recibidas van de 0 (no impacto) a 12 (impacto severo).</p>
			<p>
Use está información para revisar qué tanto estrés tiene usted y cuáles son las áreas de su vida más estresantes. Usted también puede usar este cuestionario como una guía para desarrollar un plan y mejorar su estrés. Entre más alto sea el número de eventos de vida, nivel de interferencia, sentirse molestado o el tiempo en que estos eventos estresantes han estado pasando, es más probable que el estrés sea un problema para usted y que necesite encontrar otras formas para manejar su estrés.</p>
			<p>Le sugerimos que tome este cuestionario cada semana para tener un seguimiento de cómo van cambiando las cosas. También puede compartir los resultados de este cuestionario con amigos cercanos o familiares, o con un consejero como parte del proceso de reducir su estrés.</p>
		</div>
	<?php endif; ?>
	<!-- End of Stress quiz markup -->
	<!-- Savings Calulator  markup -->
	<?php if($node->nid == 26):
		$submission = webform_get_submission($node->nid, $sid); //get the current submission data
		$cost = $submission->data[2][0];
		$cigarettes = $submission->data[3][0];

		if($cost <=0) {
			$cost = 5.31; //just in case something goes wrong, use the default value
		}
		$perday = $cigarettes/20;
		$cost = $cost * $perday;
	?>
		<div id="savings-calculator">
			<div>
				<p>Fumar cigarrillos es caro. Utilice nuestra calculadora para saber cuánto de su dinero se va al fumar.</p>
			</div>
			<table id="savings-table" summary ="This table contains data on how much money is saved by quitting cigarettes.">
				<tr>
					<th scope="col">Después...</th>
					<th scope="col">Ahorrará</th>
				</tr>
				<tr>
					<th scope="row">Un día</th>
					<td>$<?php print number_format(round($cost * 1,2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">Un semana</th>
					<td>$<?php print number_format(round($cost * 7,2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">Una mes</th>
					<td>$<?php print number_format(round($cost *30,2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">Un año</th>
					<td>$<?php print number_format(round($cost * 365,2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">10 años*</th>
					<td>$<?php print number_format(round(calculate_interest(10,$cost),2),2); ?></td>
				</tr>
				<tr>
					<th scope="row">20 años*</th>
					<td>$<?php print number_format(round(calculate_interest(20,$cost),2),2); ?></td>
				</tr>
			</table>
			<div>
				<p>* Basado en el precio de los cigarrillos que sube al 6% anual.</p>
			</div>
		</div>
	<?php endif; ?>
	<!-- End of savings calculator markup -->
	<!-- reasons to quit smoking markup -->
	<?php if($node->nid == 21): ?>
	<div id="reason-checklist">
		<p><Strong>Mis razones para dejar de fumar</strong></p>
		<ul>
			<?php
		if ($node->nid ==21){
			foreach(array($submission->data) as $data){
				foreach($data as $question){
					if($question[0] == 0) {
						print "<li class='checklist-item'>Otras razones: ". $question[0] ."</li>";
					}
					else {
						foreach($question as $reason){
						//set the reason.
							$text = '';
							switch($reason){
								case 1:
									$text = "En poco tiempo me sentiré más sano. Tendré más energía y estaré más enfocado. Mi olfato y mi sentido del gusto mejorarán. Mis dientes se verán más blancos y tendré un aliento más fresco. Toseré menos y respiraré mejor.";
								break;
								case 2:
									$text = "Seré una persona más sana por el resto de mi vida. Correré menos riesgos de padecer cáncer, ataques al corazón, sufrir derrames cerebrales o apoplejías, muerte prematura, cataratas y tendré menos arrugas. ";
								break;
								case 3:
									$text = "Mi pareja, amigos, familiares, hijos, nietos y compañeros de trabajo se sentirán orgullosos de mí. ";
								break;
								case 4:
									$text = "Me sentiré orgulloso de mí mismo. Me sentiré más en control de mi vida. Seré un mejor ejemplo para los demás. ";
								break;
								case 5:
									$text = "No expondré a los demás al humo de segunda mano. ";
								break;
								case 6:
									$text = "Tendré un bebé más sano (en caso de un embarazo en la familia). ";
								break;
								case 7:
									$text ="Tendré más dinero para gastar. ";
								break;
								case 8:
									$text = "No tendré que preguntarme: '¿Cuándo voy a fumar otra vez?' o '¿Qué voy a hacer cuando esté en un lugar donde no se permite fumar?'. ";
								break;
							}
						print "<li class='checklist-item'>". $text ."</li>";
						}
					}
				}
			}
		}
			?>
		</ul>
		<p>Imprima esta lista y mantenerla en la cartera o en el que mantiene sus cigarrillos.</p>
	</div>
	<?php endif; ?>
	<!-- reasons to quit smoking markup -->
	<!-- triggers markup -->
	<?php if($node->nid == 20): ?>
	<div id="reason-checklist">
		<p><Strong>Mis desencadenantes son...</strong></p>

		<ul>
			<?php
		if ($node->nid ==20){
			foreach(array($submission->data) as $data){
				foreach($data as $question){

					if($question == 0) {
						if($question[0] != ""){
							print "<li class='checklist-item'> Mis otros desencadenantes son: ". $question[0] ."</li>";
						}
					}
					else {
						foreach($question as $reason){

							if($reason != ''){
								//set the reason.
								print "<li class='checklist-item'>". $reason ."</li>";
							}
						}
					}
				}

			}
		}
			?>
		</ul>
		<p>Imprima esta lista y mantenerla en la cartera o en el que mantiene sus cigarrillos.</p>
	</div>
	<?php endif; ?>
	<!-- triggers markup -->

	<!-- Smokefree Espanol confirmation page Markup -->
  <?php if($node->title == 'SmokefreeESP'): ?>
    <div id="SmokefreeESP">
      <h2>¡Felicitaciones!</h2>
      <p>Gracias por registrarte. Debería recibir un mensaje de bienvenida en el teléfono inteligente en los próximos minutos . Esto confirmará que se han inscrito con éxito . Por favor, visite <a href="smokefree.gov/smokefree-text-messaging-programs">smokefree.gov/smokefree-text-messaging-programs</a> para obtener información adicional.<p>
    </div>
  <?php endif; ?>
  <!-- End of Smokefree Espanol Text Campaigns confirmation page markup -->


</div>
