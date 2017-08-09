<?php
/**
 * @file
 * blog_entry.features.node_export_features.inc
 */

/**
 * Implements hook_node_export_features_default().
 */
function blog_entry_node_export_features_default() {
  $node_export = array(
  'code_string' => 'array(
  (object) array(
      \'changed\' => NULL,
      \'comment\' => \'0\',
      \'created\' => NULL,
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'disqus\' => array(
        \'status\' => FALSE,
      ),
      \'field_about_the_author\' => array(
        \'und\' => array(
          array(
            \'value\' => "<p class=\\"rtejustify\\">Jess Havlak has been working in Public Health since leaving the George Washington University’s Masters of Public Health Communications and Marketing program in 2013. Since then, she has worked on a number of tobacco control and tobacco cessation related projects, the longest-term being Smokefree.gov. She focuses her time primarily on content design and creation, and has spent a number of years managing Smokefree’s social media platforms, including Facebook. She was inspired to go into the world of tobacco control by her late Grandmother, who helped pass some of the first smoke-free laws in Arizona.&nbsp;</p>\\r\\n",
            \'format\' => \'full_html\',
            \'safe_value\' => "<p class=\\"rtejustify\\">Jess Havlak has been working in Public Health since leaving the George Washington University’s Masters of Public Health Communications and Marketing program in 2013. Since then, she has worked on a number of tobacco control and tobacco cessation related projects, the longest-term being Smokefree.gov. She focuses her time primarily on content design and creation, and has spent a number of years managing Smokefree’s social media platforms, including Facebook. She was inspired to go into the world of tobacco control by her late Grandmother, who helped pass some of the first smoke-free laws in Arizona.&nbsp;</p>\\n",
          ),
        ),
      ),
      \'field_author_profile_photo\' => array(
        \'und\' => array(
          array(
            \'fid\' => \'943\',
            \'uid\' => \'331\',
            \'filename\' => \'Jessica Havlak.png\',
            \'uri\' => \'public://author_bio_images/Jessica Havlak.png\',
            \'filemime\' => \'image/png\',
            \'filesize\' => \'170859\',
            \'status\' => \'1\',
            \'timestamp\' => \'1501706055\',
            \'type\' => \'image\',
            \'uuid\' => \'028bac7c-41b8-4a12-98e2-bed25c95ef3d\',
            \'field_file_image_alt_text\' => array(
              \'und\' => array(
                array(
                  \'value\' => \'Jessica Havlak\',
                  \'format\' => NULL,
                  \'safe_value\' => \'Jessica Havlak\',
                ),
              ),
            ),
            \'field_file_image_title_text\' => array(
              \'und\' => array(
                array(
                  \'value\' => \'Jessica Havlak\',
                  \'format\' => NULL,
                  \'safe_value\' => \'Jessica Havlak\',
                ),
              ),
            ),
            \'field_image_rights\' => array(),
            \'_drafty_revision_requested\' => \'FIELD_LOAD_CURRENT\',
            \'rdf_mapping\' => array(),
            \'metadata\' => array(
              \'height\' => 317,
              \'width\' => 266,
            ),
            \'alt\' => \'Jessica Havlak\',
            \'title\' => \'Jessica Havlak\',
            \'height\' => \'317\',
            \'width\' => \'266\',
          ),
        ),
      ),
      \'files\' => array(),
      \'language\' => \'und\',
      \'last_comment_timestamp\' => NULL,
      \'log\' => \'\',
      \'name\' => \'sasanka.jandhyala\',
      \'nid\' => NULL,
      \'node_export_drupal_version\' => \'7\',
      \'path\' => NULL,
      \'picture\' => \'0\',
      \'print_display\' => 0,
      \'print_display_comment\' => 0,
      \'print_display_urllist\' => 0,
      \'print_pdf_display\' => 0,
      \'print_pdf_display_comment\' => 0,
      \'print_pdf_display_urllist\' => 0,
      \'promote\' => \'0\',
      \'published_at\' => \'1500305929\',
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'revision_timestamp\' => NULL,
      \'revision_uid\' => \'331\',
      \'status\' => \'1\',
      \'sticky\' => \'0\',
      \'title\' => \'Jessica Havlak\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'type\' => \'author_bio\',
      \'uid\' => \'331\',
      \'uuid\' => \'0530917a-d3a4-43f5-8ed4-cfe881715d5a\',
      \'vid\' => NULL,
      \'vuuid\' => \'c224741b-0efc-4a55-9ee8-0c1230fef9b1\',
    ),
  (object) array(
      \'changed\' => NULL,
      \'comment\' => \'0\',
      \'created\' => NULL,
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'disqus\' => array(
        \'status\' => FALSE,
      ),
      \'field_about_the_author\' => array(
        \'und\' => array(
          array(
            \'value\' => "<p class=\\"rtejustify\\">Iva Stoyneva is a user experience strategy and research specialist. She employs a user-centered approach to design and evaluation of digital practice. Iva’s background is in digital health communication research.&nbsp; She holds a Master’s in Lifespan and Digital Communication from Old Dominion University, and is an alumnus from the Health Communications Fellowship at the National Institutes of Health. She believes that evidence based, user-centered design is a critical component of solving communication problems that affect people’s wellbeing in areas such as health, education, politics and civic society.&nbsp;</p>\\r\\n",
            \'format\' => \'full_html\',
            \'safe_value\' => "<p class=\\"rtejustify\\">Iva Stoyneva is a user experience strategy and research specialist. She employs a user-centered approach to design and evaluation of digital practice. Iva’s background is in digital health communication research.&nbsp; She holds a Master’s in Lifespan and Digital Communication from Old Dominion University, and is an alumnus from the Health Communications Fellowship at the National Institutes of Health. She believes that evidence based, user-centered design is a critical component of solving communication problems that affect people’s wellbeing in areas such as health, education, politics and civic society.&nbsp;</p>\\n",
          ),
        ),
      ),
      \'field_author_profile_photo\' => array(),
      \'files\' => array(),
      \'language\' => \'und\',
      \'last_comment_timestamp\' => NULL,
      \'log\' => \'\',
      \'name\' => \'sasanka.jandhyala\',
      \'nid\' => NULL,
      \'node_export_drupal_version\' => \'7\',
      \'path\' => NULL,
      \'picture\' => \'0\',
      \'print_display\' => 0,
      \'print_display_comment\' => 0,
      \'print_display_urllist\' => 0,
      \'print_pdf_display\' => 0,
      \'print_pdf_display_comment\' => 0,
      \'print_pdf_display_urllist\' => 0,
      \'promote\' => \'0\',
      \'published_at\' => \'1500306010\',
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'revision_timestamp\' => NULL,
      \'revision_uid\' => \'331\',
      \'status\' => \'1\',
      \'sticky\' => \'0\',
      \'title\' => \'Iva Stoyneva\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'type\' => \'author_bio\',
      \'uid\' => \'331\',
      \'uuid\' => \'2db3ea84-b745-4a33-bcf5-6c5149d3ff65\',
      \'vid\' => NULL,
      \'vuuid\' => \'856ed4c4-777c-40f5-894f-4e8ec1435da9\',
    ),
  (object) array(
      \'changed\' => NULL,
      \'comment\' => \'0\',
      \'created\' => NULL,
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'disqus\' => array(
        \'status\' => FALSE,
      ),
      \'field_about_the_author\' => array(
        \'und\' => array(
          array(
            \'value\' => "<p>Brian Keefe is a digital strategist at ICF with deep expertise in health communication, marketing, social media outreach, and project management. Mr. Keefe has worked extensively in the development of health behavior change campaigns and programs, such as the National Cancer Institute’s (NCI) Smokefree Initiative – delivering timely smoking cessation interventions. Mr. Keefe leads the analytics and program monitoring activities for the Initiative, ensuring evidence based communication tactics yield desired behavior change outcomes, and co-leads a line of research/evaluation. Mr. Keefe also provides marketing and communication support to a number of other government and health initiatives at ICF. He manages projects focused on health behavior change, communication strategy and planning, content development, social media strategy, online health interventions, and other digital communication areas of inquiry. Mr. Keefe has a B.A. in Communication Studies from The College of New Jersey and an M.A. in Communication from George Mason University.</p>\\r\\n",
            \'format\' => \'full_html\',
            \'safe_value\' => "<p>Brian Keefe is a digital strategist at ICF with deep expertise in health communication, marketing, social media outreach, and project management. Mr. Keefe has worked extensively in the development of health behavior change campaigns and programs, such as the National Cancer Institute’s (NCI) Smokefree Initiative – delivering timely smoking cessation interventions. Mr. Keefe leads the analytics and program monitoring activities for the Initiative, ensuring evidence based communication tactics yield desired behavior change outcomes, and co-leads a line of research/evaluation. Mr. Keefe also provides marketing and communication support to a number of other government and health initiatives at ICF. He manages projects focused on health behavior change, communication strategy and planning, content development, social media strategy, online health interventions, and other digital communication areas of inquiry. Mr. Keefe has a B.A. in Communication Studies from The College of New Jersey and an M.A. in Communication from George Mason University.</p>\\n",
          ),
        ),
      ),
      \'field_author_profile_photo\' => array(),
      \'files\' => array(),
      \'language\' => \'und\',
      \'last_comment_timestamp\' => NULL,
      \'log\' => \'\',
      \'name\' => \'sasanka.jandhyala\',
      \'nid\' => NULL,
      \'node_export_drupal_version\' => \'7\',
      \'path\' => NULL,
      \'picture\' => \'0\',
      \'print_display\' => 0,
      \'print_display_comment\' => 0,
      \'print_display_urllist\' => 0,
      \'print_pdf_display\' => 0,
      \'print_pdf_display_comment\' => 0,
      \'print_pdf_display_urllist\' => 0,
      \'promote\' => \'0\',
      \'published_at\' => \'1500305723\',
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'revision_timestamp\' => NULL,
      \'revision_uid\' => \'331\',
      \'status\' => \'1\',
      \'sticky\' => \'0\',
      \'title\' => \'Brian Keefe\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'type\' => \'author_bio\',
      \'uid\' => \'331\',
      \'uuid\' => \'4f8c70ff-3f71-47fc-b0be-72ee5ad018be\',
      \'vid\' => NULL,
      \'vuuid\' => \'a9993d00-50b0-4512-ab7a-d280c106980b\',
    ),
  (object) array(
      \'changed\' => NULL,
      \'comment\' => \'0\',
      \'created\' => NULL,
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'disqus\' => array(
        \'status\' => FALSE,
      ),
      \'field_about_the_author\' => array(
        \'und\' => array(
          array(
            \'value\' => "<p class=\\"rtejustify\\">Sarah Field is a Digital Communications Specialist within ICF’s LEADS Division. Field has more than seven years of strategic communication experience ranging from communication instruction to public relations, advertising, marketing, and events. She is an effective decision-maker and leader who creates and drives successful campaigns that help organizations achieve measurable success. Her strengths include paid media and marketing, public relations, relationship management, top-tier media outreach, branding and messaging, project management, and research and analysis. Prior to ICF, Ms. Field worked for ENC Strategy where she led client services for government, nonprofit, and consulting accounts and served as a senior account manager. She also spent five years at O’Keeffe &amp; Company, an integrated agency specializing in PR, research, event management, advertising, and marketing, where she managed healthcare, technology, and government account teams.</p>\\r\\n",
            \'format\' => \'full_html\',
            \'safe_value\' => "<p class=\\"rtejustify\\">Sarah Field is a Digital Communications Specialist within ICF’s LEADS Division. Field has more than seven years of strategic communication experience ranging from communication instruction to public relations, advertising, marketing, and events. She is an effective decision-maker and leader who creates and drives successful campaigns that help organizations achieve measurable success. Her strengths include paid media and marketing, public relations, relationship management, top-tier media outreach, branding and messaging, project management, and research and analysis. Prior to ICF, Ms. Field worked for ENC Strategy where she led client services for government, nonprofit, and consulting accounts and served as a senior account manager. She also spent five years at O’Keeffe &amp; Company, an integrated agency specializing in PR, research, event management, advertising, and marketing, where she managed healthcare, technology, and government account teams.</p>\\n",
          ),
        ),
      ),
      \'field_author_profile_photo\' => array(
        \'und\' => array(
          array(
            \'fid\' => \'942\',
            \'uid\' => \'331\',
            \'filename\' => \'Sarah Field.png\',
            \'uri\' => \'public://author_bio_images/Sarah Field_0.png\',
            \'filemime\' => \'image/png\',
            \'filesize\' => \'398428\',
            \'status\' => \'1\',
            \'timestamp\' => \'1501705880\',
            \'type\' => \'image\',
            \'uuid\' => \'877788cd-25d4-4713-aebb-fe3b35e83496\',
            \'field_file_image_alt_text\' => array(
              \'und\' => array(
                array(
                  \'value\' => \'Sarah Field\',
                  \'format\' => NULL,
                  \'safe_value\' => \'Sarah Field\',
                ),
              ),
            ),
            \'field_file_image_title_text\' => array(
              \'und\' => array(
                array(
                  \'value\' => \'Sarah Field\',
                  \'format\' => NULL,
                  \'safe_value\' => \'Sarah Field\',
                ),
              ),
            ),
            \'field_image_rights\' => array(),
            \'_drafty_revision_requested\' => \'FIELD_LOAD_CURRENT\',
            \'rdf_mapping\' => array(),
            \'metadata\' => array(
              \'height\' => 554,
              \'width\' => 443,
            ),
            \'alt\' => \'Sarah Field\',
            \'title\' => \'Sarah Field\',
            \'height\' => \'554\',
            \'width\' => \'443\',
          ),
        ),
      ),
      \'files\' => array(),
      \'language\' => \'und\',
      \'last_comment_timestamp\' => NULL,
      \'log\' => \'\',
      \'name\' => \'sasanka.jandhyala\',
      \'nid\' => NULL,
      \'node_export_drupal_version\' => \'7\',
      \'path\' => NULL,
      \'picture\' => \'0\',
      \'print_display\' => 0,
      \'print_display_comment\' => 0,
      \'print_display_urllist\' => 0,
      \'print_pdf_display\' => 0,
      \'print_pdf_display_comment\' => 0,
      \'print_pdf_display_urllist\' => 0,
      \'promote\' => \'0\',
      \'published_at\' => \'1500305963\',
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'revision_timestamp\' => NULL,
      \'revision_uid\' => \'331\',
      \'status\' => \'1\',
      \'sticky\' => \'0\',
      \'title\' => \'Sarah Field\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'type\' => \'author_bio\',
      \'uid\' => \'331\',
      \'uuid\' => \'907aea24-efbb-4e54-be1a-e221e3356be5\',
      \'vid\' => NULL,
      \'vuuid\' => \'f8143d4b-a0c8-4d08-b0c5-6effc28d7cb0\',
    ),
  (object) array(
      \'body\' => array(
        \'und\' => array(
          array(
            \'value\' => "<p class=\\"rtejustify\\">We welcome guest submissions to this blog.&nbsp; The National Cancer Institute reserves the right to modify or reject any mHealth Monitor blog submission. Any views and opinions in blog posts, or those expressed in external links, do not constitute endorsement by the Smokefree.gov Initiative, National Cancer Institute, Department of Health and Human Services, or federal government.</p>\\r\\n<p class=\\"rtejustify\\">We value comments and discussion on specific blogs, and appreciate our readers’ time, thoughts, and feedback. The views expressed in comments reflect those of the author and do not reflect the views of the Smokefree.gov Initiative, National Cancer Institute, Department of Health and Human Services, or federal government.</p>\\r\\n<p class=\\"rtejustify\\">We ask that commenters maintain a respectful and professional tone. At our discretion, we may remove any post from the site.</p>\\r\\n<p class=\\"rtejustify\\">We explicitly will not accept comments that contain:</p>\\r\\n<ul>\\r\\n\\t<li class=\\"rtejustify\\">\\r\\n\\t\\tObscene, indecent, profane or otherwise harassing language.</li>\\r\\n\\t<li class=\\"rtejustify\\">\\r\\n\\t\\tPromotions or endorsements of services or products (note that non-commercial links that are relevant to the topic or another comment are acceptable).</li>\\r\\n</ul>\\r\\n<p class=\\"rtejustify\\">&nbsp;</p>\\r\\n<p class=\\"rtejustify\\">If you have any questions on the commenting policy, please <a href=\\"mailto:SmokeFreeTeam@icfi.com\\">contact us.</a></p>\\r\\n",
            \'summary\' => "<p class=\\"rtejustify\\">We welcome guest submissions to this blog.&nbsp; The National Cancer Institute reserves the right to modify or reject any <em>mHealth Monitor</em> blog submission. Any views and opinions in blog posts, or those expressed in external links, do not constitute endorsement by the Smokefree.gov Initiative, National Cancer Institute, Department of Health and Human Services, or federal government.<br />\\r\\n\\t&nbsp;</p>\\r\\n",
            \'format\' => \'full_html\',
            \'safe_value\' => "<p class=\\"rtejustify\\">We welcome guest submissions to this blog.&nbsp; The National Cancer Institute reserves the right to modify or reject any mHealth Monitor blog submission. Any views and opinions in blog posts, or those expressed in external links, do not constitute endorsement by the Smokefree.gov Initiative, National Cancer Institute, Department of Health and Human Services, or federal government.</p>\\n<p class=\\"rtejustify\\">We value comments and discussion on specific blogs, and appreciate our readers’ time, thoughts, and feedback. The views expressed in comments reflect those of the author and do not reflect the views of the Smokefree.gov Initiative, National Cancer Institute, Department of Health and Human Services, or federal government.</p>\\n<p class=\\"rtejustify\\">We ask that commenters maintain a respectful and professional tone. At our discretion, we may remove any post from the site.</p>\\n<p class=\\"rtejustify\\">We explicitly will not accept comments that contain:</p>\\n<ul>\\n\\t<li class=\\"rtejustify\\">\\n\\t\\tObscene, indecent, profane or otherwise harassing language.</li>\\n\\t<li class=\\"rtejustify\\">\\n\\t\\tPromotions or endorsements of services or products (note that non-commercial links that are relevant to the topic or another comment are acceptable).</li>\\n</ul>\\n<p class=\\"rtejustify\\">&nbsp;</p>\\n<p class=\\"rtejustify\\">If you have any questions on the commenting policy, please <a href=\\"mailto:SmokeFreeTeam@icfi.com\\">contact us.</a></p>\\n",
            \'safe_summary\' => "<p class=\\"rtejustify\\">We welcome guest submissions to this blog.&nbsp; The National Cancer Institute reserves the right to modify or reject any <em>mHealth Monitor</em> blog submission. Any views and opinions in blog posts, or those expressed in external links, do not constitute endorsement by the Smokefree.gov Initiative, National Cancer Institute, Department of Health and Human Services, or federal government.<br />\\n\\t&nbsp;</p>\\n",
          ),
        ),
      ),
      \'changed\' => NULL,
      \'comment\' => \'0\',
      \'created\' => NULL,
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'disqus\' => array(
        \'status\' => FALSE,
      ),
      \'files\' => array(),
      \'language\' => \'und\',
      \'last_comment_timestamp\' => NULL,
      \'log\' => \'\',
      \'name\' => \'sasanka.jandhyala\',
      \'nid\' => NULL,
      \'node_export_drupal_version\' => \'7\',
      \'path\' => NULL,
      \'picture\' => \'0\',
      \'print_display\' => 1,
      \'print_display_comment\' => 0,
      \'print_display_urllist\' => 1,
      \'print_pdf_display\' => 1,
      \'print_pdf_display_comment\' => 0,
      \'print_pdf_display_urllist\' => 1,
      \'promote\' => \'0\',
      \'published_at\' => \'1500051732\',
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'revision_timestamp\' => NULL,
      \'revision_uid\' => \'331\',
      \'status\' => \'1\',
      \'sticky\' => \'0\',
      \'title\' => \'Blog Submission and Comment Policy and Disclaimer\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'type\' => \'disclaimer\',
      \'uid\' => \'331\',
      \'uuid\' => \'c2079320-dacd-4dde-a74b-0b8eb5819612\',
      \'vid\' => NULL,
      \'vuuid\' => \'dc433c6d-d0c0-45d7-a9d5-1481986297b2\',
    ),
  (object) array(
      \'changed\' => NULL,
      \'comment\' => \'0\',
      \'created\' => NULL,
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'disqus\' => array(
        \'status\' => FALSE,
      ),
      \'field_about_the_author\' => array(
        \'und\' => array(
          array(
            \'value\' => "<p class=\\"rtejustify\\"><strong style=\\"text-align: justify;\\">Ellen&nbsp;Beckjord, PhD, MPH:&nbsp;</strong><span style=\\"text-align: justify;\\">Dr.&nbsp;</span>Beckjord<span style=\\"text-align: justify;\\">&nbsp;did her training in clinical psychology at the University of Vermont, where she worked with more than one hundred cancer survivors and their families delivering evidence-based behavioral medicine interventions from time of diagnosis through end-of-life care. After completing her internship at the Vanderbilt-VA internship consortium, she entered the National Cancer Institute’s Cancer Prevention Fellowship Program and spent her first year of fellowship getting a Masters in Public Health focused on Epidemiology and&nbsp;</span>Biostatistics<span style=\\"text-align: justify;\\">. At the National Cancer Institute, Dr.&nbsp;</span>Beckjord<span style=\\"text-align: justify;\\">&nbsp;did her post-doctoral research in the Health Communication and Informatics Research Branch within the Division of Cancer Control and Population Sciences. From NCI, Dr.&nbsp;</span>Beckjord<span style=\\"text-align: justify;\\">&nbsp;spent three years in research consulting with RAND Corporation before spending nearly five years in academic medicine at the University of Pittsburgh and Hillman Cancer Center, where she received a Career Development Award to develop and test a context-aware mobile application for smoking cessation. In February 2015, she left the University of Pittsburgh to join the&nbsp;</span>UPMC<span style=\\"text-align: justify;\\">&nbsp;Health Plan as Director of Population Health Program Design and Engagement Optimization. Her current work is focused on behavioral informatics and population health; specifically, the use of mobile technology to promote health, wellness, and health behavior change. She is particularly interested in the role of consumer generated health data in an informatics-enabled learning health care system.</span></p>\\r\\n",
            \'format\' => \'full_html\',
            \'safe_value\' => "<p class=\\"rtejustify\\"><strong style=\\"text-align: justify;\\">Ellen&nbsp;Beckjord, PhD, MPH:&nbsp;</strong><span style=\\"text-align: justify;\\">Dr.&nbsp;</span>Beckjord<span style=\\"text-align: justify;\\">&nbsp;did her training in clinical psychology at the University of Vermont, where she worked with more than one hundred cancer survivors and their families delivering evidence-based behavioral medicine interventions from time of diagnosis through end-of-life care. After completing her internship at the Vanderbilt-VA internship consortium, she entered the National Cancer Institute’s Cancer Prevention Fellowship Program and spent her first year of fellowship getting a Masters in Public Health focused on Epidemiology and&nbsp;</span>Biostatistics<span style=\\"text-align: justify;\\">. At the National Cancer Institute, Dr.&nbsp;</span>Beckjord<span style=\\"text-align: justify;\\">&nbsp;did her post-doctoral research in the Health Communication and Informatics Research Branch within the Division of Cancer Control and Population Sciences. From NCI, Dr.&nbsp;</span>Beckjord<span style=\\"text-align: justify;\\">&nbsp;spent three years in research consulting with RAND Corporation before spending nearly five years in academic medicine at the University of Pittsburgh and Hillman Cancer Center, where she received a Career Development Award to develop and test a context-aware mobile application for smoking cessation. In February 2015, she left the University of Pittsburgh to join the&nbsp;</span>UPMC<span style=\\"text-align: justify;\\">&nbsp;Health Plan as Director of Population Health Program Design and Engagement Optimization. Her current work is focused on behavioral informatics and population health; specifically, the use of mobile technology to promote health, wellness, and health behavior change. She is particularly interested in the role of consumer generated health data in an informatics-enabled learning health care system.</span></p>\\n",
          ),
        ),
      ),
      \'field_author_profile_photo\' => array(
        \'und\' => array(
          array(
            \'fid\' => \'940\',
            \'uid\' => \'331\',
            \'filename\' => \'Ellen Beckjord.jpg\',
            \'uri\' => \'public://author_bio_images/Ellen Beckjord.jpg\',
            \'filemime\' => \'image/jpeg\',
            \'filesize\' => \'43916\',
            \'status\' => \'1\',
            \'timestamp\' => \'1501705662\',
            \'type\' => \'image\',
            \'uuid\' => \'06a7953e-86d5-4675-923e-7748832dd1f8\',
            \'field_file_image_alt_text\' => array(
              \'und\' => array(
                array(
                  \'value\' => \'Ellen Beckjord\',
                  \'format\' => NULL,
                  \'safe_value\' => \'Ellen Beckjord\',
                ),
              ),
            ),
            \'field_file_image_title_text\' => array(
              \'und\' => array(
                array(
                  \'value\' => \'Ellen Beckjord\',
                  \'format\' => NULL,
                  \'safe_value\' => \'Ellen Beckjord\',
                ),
              ),
            ),
            \'field_image_rights\' => array(),
            \'_drafty_revision_requested\' => \'FIELD_LOAD_CURRENT\',
            \'rdf_mapping\' => array(),
            \'metadata\' => array(
              \'height\' => 720,
              \'width\' => 574,
            ),
            \'alt\' => \'Ellen Beckjord\',
            \'title\' => \'Ellen Beckjord\',
            \'height\' => \'720\',
            \'width\' => \'574\',
          ),
        ),
      ),
      \'files\' => array(),
      \'language\' => \'und\',
      \'last_comment_timestamp\' => NULL,
      \'log\' => \'\',
      \'name\' => \'sasanka.jandhyala\',
      \'nid\' => NULL,
      \'node_export_drupal_version\' => \'7\',
      \'path\' => NULL,
      \'picture\' => \'0\',
      \'print_display\' => 0,
      \'print_display_comment\' => 0,
      \'print_display_urllist\' => 0,
      \'print_pdf_display\' => 0,
      \'print_pdf_display_comment\' => 0,
      \'print_pdf_display_urllist\' => 0,
      \'promote\' => \'0\',
      \'published_at\' => \'1500305883\',
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'revision_timestamp\' => NULL,
      \'revision_uid\' => \'331\',
      \'status\' => \'1\',
      \'sticky\' => \'0\',
      \'title\' => \'Ellen Beckjord\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'type\' => \'author_bio\',
      \'uid\' => \'331\',
      \'uuid\' => \'c4dd2231-f534-4f99-9eee-b5dc3812c8c3\',
      \'vid\' => NULL,
      \'vuuid\' => \'120db3e4-d9ff-4b06-a031-cdb6118aaa90\',
    ),
  (object) array(
      \'changed\' => NULL,
      \'comment\' => \'0\',
      \'created\' => NULL,
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'disqus\' => array(
        \'status\' => FALSE,
      ),
      \'field_about_the_author\' => array(
        \'und\' => array(
          array(
            \'value\' => "<p class=\\"rtejustify\\"><strong>Alice Murray, BA: </strong>Alice Murray received a bachelor’s degree in marketing with a focus on human services and social impact from the George Washington University. She has spent over a year working at ICF as a digital communications specialist, where she works on the social media strategy for public health messaging initiatives. Her professional focus is on data-driven social media management and outreach. She is particularly interested in how data and analytics can shape the communications field through strategic content creation, applied statistical modeling, and principles of social marketing.</p>\\r\\n",
            \'format\' => \'full_html\',
            \'safe_value\' => "<p class=\\"rtejustify\\"><strong>Alice Murray, BA: </strong>Alice Murray received a bachelor’s degree in marketing with a focus on human services and social impact from the George Washington University. She has spent over a year working at ICF as a digital communications specialist, where she works on the social media strategy for public health messaging initiatives. Her professional focus is on data-driven social media management and outreach. She is particularly interested in how data and analytics can shape the communications field through strategic content creation, applied statistical modeling, and principles of social marketing.</p>\\n",
          ),
        ),
      ),
      \'field_author_profile_photo\' => array(
        \'und\' => array(
          array(
            \'fid\' => \'939\',
            \'uid\' => \'331\',
            \'filename\' => \'Alice Murray.jpg\',
            \'uri\' => \'public://author_bio_images/Alice Murray.jpg\',
            \'filemime\' => \'image/jpeg\',
            \'filesize\' => \'121272\',
            \'status\' => \'1\',
            \'timestamp\' => \'1501617473\',
            \'type\' => \'image\',
            \'uuid\' => \'2af59196-4381-4f72-88f1-c3d675d2912d\',
            \'field_file_image_alt_text\' => array(),
            \'field_file_image_title_text\' => array(),
            \'field_image_rights\' => array(),
            \'_drafty_revision_requested\' => \'FIELD_LOAD_CURRENT\',
            \'rdf_mapping\' => array(),
            \'metadata\' => array(
              \'height\' => 960,
              \'width\' => 637,
            ),
            \'alt\' => NULL,
            \'title\' => NULL,
            \'height\' => \'960\',
            \'width\' => \'637\',
          ),
        ),
      ),
      \'files\' => array(),
      \'language\' => \'und\',
      \'last_comment_timestamp\' => NULL,
      \'log\' => \'\',
      \'name\' => \'sasanka.jandhyala\',
      \'nid\' => NULL,
      \'node_export_drupal_version\' => \'7\',
      \'path\' => NULL,
      \'picture\' => \'0\',
      \'print_display\' => 0,
      \'print_display_comment\' => 0,
      \'print_display_urllist\' => 0,
      \'print_pdf_display\' => 0,
      \'print_pdf_display_comment\' => 0,
      \'print_pdf_display_urllist\' => 0,
      \'promote\' => \'0\',
      \'published_at\' => \'1501597386\',
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'revision_timestamp\' => NULL,
      \'revision_uid\' => \'331\',
      \'status\' => \'1\',
      \'sticky\' => \'0\',
      \'title\' => \'Alice Murray\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'type\' => \'author_bio\',
      \'uid\' => \'331\',
      \'uuid\' => \'d268b0c1-47fc-4135-a7ab-c92715dc846d\',
      \'vid\' => NULL,
      \'vuuid\' => \'e9db13bc-756d-43dd-a0f0-0aeafeac0005\',
    ),
)',
);
  return $node_export;
}
