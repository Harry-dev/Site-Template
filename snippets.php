<?php 
	
	// Add an 'Options' page for ACF
	if( function_exists('acf_add_options_page') ) {	
		acf_add_options_page();
	}




	// Add extra buttons to the Wordpress WYSIWIG editor
	function my_mce_buttons_3( $buttons ) {	

		$buttons[] = 'superscript';
		$buttons[] = 'subscript';
		$buttons[] = 'hr';
		$buttons[] = 'del';
		$buttons[] = 'fontselect';
		$buttons[] = 'fontsizeselect';
		$buttons[] = 'cleanup';
		$buttons[] = 'styleselect';

		return $buttons;
	}
	add_filter( 'mce_buttons_3', 'my_mce_buttons_3' );




	// Echo the content of a page or post
	echo apply_filters('the_content', $section->post_content);




	// Provide an absolute path for the project
	echo get_stylesheet_directory_uri().'/...'




	// Get template part 'section-splash.php'
	get_template_part('section', 'splash');




	// Change the default WP 'read more' ellipsis
	function new_excerpt_more($more) {
    	return '...';
	}
	add_filter('excerpt_more', 'new_excerpt_more');

	// Limit the length of the excerpt by number of words
	function custom_excerpt_length( $length ) {
		return 55; // 55 by WP Default
	}
	add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );




	// Make all modules the height of the largest one
        // get an array of all element heights
        var elemHeights = $('.class-of-element').map(function() {
            return $(this).height();
        }).get();
        
        // Math.max takes a variable number of arguments
        // `apply` is equivalent to passing each height as an argument
        var maxHeight = Math.max.apply(null, elemHeights);

        if (document.documentElement.clientWidth > 768) {
            $('.class-of-element').height(maxHeight);
        }




    // Render an ACF image field using ID + shortcode parameters
    $img_id = get_field('image', $post->ID);
	$img = do_shortcode('[SG_IMAGE image_id="'.$img_id.'" imagesize="" return="url"]');




	// Get addresse/s from Swell Admin 'Contact Details'
	$address = sa_get_addresses(); // This gathers an array of all addresses
	$addresses = sa_get_address(0); // This gathers a single address according to index (0 being the first)
	$phone = sa_get_number_for_address(0, 'Phone'); // Get just the phone value 
    $email = sa_get_social_handle('email'); // Get just the email value




    // Edit the markup of a WP-generated menu
    add_filter( 'wp_setup_nav_menu_item','menu_markup' );
	function menu_markup($item) {
		
		// Do not apply to menus in the back end
		if ( is_admin() ) {
			return $item;
		}
		
		// Add a class to the <li> element of each item
			$item->classes[] = 'new-class';


			
		// Add a div/span to every CHARACTER in each item
	    	$str = $item->title; // Set a variable($str) to the element that requires marking(item title)
	    	$new_string = ''; // Establish a new array

			for ($i=0; $i < strlen($str); $i++) { // Get the length of the item's string, count it, and for each count...
				$new_string .= '<span>'. $str[$i] .'</span>'; // ... create the new string.
			}

			$item->title = $new_string; // Change to new string!

	    return $item; // And return it
	}




	// Posts setup for archive page
	$args = array(
		'post_type' => 'post',
		'posts_per_page' => -1,
	);
	$news = get_posts($args);
	foreach ( $news as $post ) {
        setup_postdata( $post );

        // Markup
    }

	// OR //

	$study_category = get_terms( 'case-study-category', array(
        'hide_empty' => true,
        'orderby' => 'date',
        'order' => 'DESC',
    ));
    foreach ( $study_category as $category ) {
    	$args = array(
            'post_type' => 'case-study',
            'posts_per_page' => -1,
            'orderby' => 'date',
			'order' => 'ASC',

            'tax_query' => array(
				array(
					'taxonomy' => 'case-study-category',
					'field' => 'slug',
					'terms' => $category->slug
				)
			)
        );
        $case_studies = get_posts($args);

        foreach ( $case_studies as $post ) {
            setup_postdata( $post );

            // Markup
        }
    }




    // Enqueue a Google font
    wp_enqueue_style( 'Google Fonts', "https://fonts.googleapis.com/css?family=Raleway:400,500,600,700|Work+Sans:300,400,500,600,700", null, $style_time, 'screen' );
?>



<!-- Use different animations for hover in/out -->
<!-- This example disables delay by default, but overides that for hover -->
ul li {
	
	// OUT ONLY
	transition-delay: 0;
}
ul:hover {
	
	li {
		// IN ONLY
		.staggered-transition(200, 300);
	}
}


<!-- REGEX -->
<!-- Select everything between the TDs -->
(?s)(?<=<td>)(.+?)(?=</td>)



















