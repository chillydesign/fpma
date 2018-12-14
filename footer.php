			<!-- footer -->
			<footer class="footer" role="contentinfo">
				<div class="footer_top">
					<div class="container">
						<h3>Pour plus d'informations...</h3>
					</div>
					<hr>
					<div class="container">
						<div class="row">
							<div class="col-sm-4 footer_col"><?php echo get_field('colonne1', 'options'); ?></div>
							<div class="col-sm-4 footer_col"><?php echo get_field('colonne2', 'options'); ?></div>
							<div class="col-sm-4 footer_col">
								<h4>Liens utiles</h4>
								<ul>
								 <?php chilly_nav('extra-menu'); ?>
							 </ul>
							 <p style="display:none;">Pour les rachats d’années, merci de contacter <span style="display:inline-block">M. Figliola</span>, avant d’effectuer tout virement.</p>
						 </div>
						</div>
					</div>
				</div>

				<div class="footer_bottom">
					<p class="container">
						&copy; <?php echo date('Y'); ?> Copyright ©<?php bloginfo('name'); ?> | Website by <a href="//webfactor.ch" title="Webfactor">Webfactor</a>
					</p>
				</div>

			</footer>
			<!-- /footer -->



		<?php wp_footer(); ?>
		<?php $tdu = get_template_directory_uri(); ?>
		<script type='text/javascript' src='//maps.google.com/maps/api/js?key=AIzaSyA0MhoPPsfQ5valqUXSBMDROB9rAhbsvxs&#038;ver=4.8.1'></script>
		<script type="text/javascript" src="<?php echo $tdu; ?>/js/min/slick.min.js"></script>
		<script type="text/javascript" src="<?php echo $tdu; ?>/js/min/jquery.matchHeight.js"></script>
		<script type="text/javascript" src="<?php echo $tdu; ?>/js/scripts.js?v=<?php echo wf_version(); ?>"></script>

		<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-114588276-5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-114588276-5');
</script>


	</body>
</html>
