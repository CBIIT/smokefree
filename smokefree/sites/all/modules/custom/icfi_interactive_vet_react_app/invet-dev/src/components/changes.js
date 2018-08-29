const data = {
    changes: {
        default: {
           chancesOfStayingQuit: '<p className="larger">Many people choose to quit without any assistance—also known as “quitting cold turkey.” But data show that you are much more likely to stay quit if you use aids like NRT and counseling.</p> <p className="larger"><strong>Select one or more</strong> of the therapies above to see how your likelihood of staying quit could change.</p>',
           face: 'images/nrt-animation-placeholder-1.jpg',
           lozengeDisabled: 'disabled',
            gumDisabled: '',
           youSelected: 'Make a selection above.',
           quickTips: [
               'Begin using the patch and lozenge on your quit date.',
               'Each day, remove the old patch when you wake up and apply one new patch.',
               'Use lozenges as needed to reduce cravings.',
               'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
               'Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.'
            ],
            planningyourDay: 'Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the lozenge is used as needed to control cravings.',
            quote: 'I\’m 9 days cigarette-free!”',
            videoUrl: 'https://i.ytimg.com/vi_webp/U4vOVbXxPl4/maxresdefault.webp',
            gifImage: 'images/nrt-slider-placeholder.jpg'
        },
        patch: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>2 times</strong> more likely to stay quit.</p> <p className="larger">Try combining with the nicotine gum or lozenge for an even greater chance to stay quit.</p>',
            face: 'images/nrt-animation-placeholder-2.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Patch',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.',
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Begin using the patch on your quit date.',
                'Each day, remove the old patch when you wake up and apply one new patch.',
                'Avoid wearing the patch on the same area more than once a week.',
                'If you have trouble sleeping or vivid dreams, remove the patch before going to sleep.'
             ],
             planningyourDay: 'The patch provides a steady dose of nicotine for withdrawal relief throughout the day. When you wake up, remove your old patch and apply a new one. Apply only one patch at a time.',
             quote: '"No urges today!”',
             videoUrl: 'https://www.youtube.com/watch?v=9fSde2DD8YQ',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         gum: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>2 times</strong> more likely to stay quit.</p> <p className="larger">Try combining with the nicotine patch for an even greater chance to stay quit.</p>',
            face: 'images/nrt-animation-placeholder-2.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Nicotine Gum',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.'
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Begin using the gum on your quit date.',
                'Unlike regular gum, bite down slowly a few times until you have a slight tingling in your mouth.',
                'Park the gum between your cheek and gum. Leave it there for about 1 minute to absorb nicotine.',
                'Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.',
                'Do not bite down too quickly or swallow the nicotine; it may make you nauseous or upset your stomach.',
                'Do not eat or drink 15 minutes before or during use.'
             ],
             planningyourDay: 'The gum has nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before or during use.',
             quote: '"I\’m taking it one craving at a time, one day at a time.”',
             videoUrl: 'https://www.youtube.com/watch?v=-Yg7_lwBcq0',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         lozenge: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>3 times</strong> more likely to stay quit.</p> <p className="larger">Try combining with the nicotine patch for an even greater chance to stay quit.</p>',
            face: 'images/nrt-animation-placeholder-2.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Nicotine Lozenge',
                    text: 'The lozenge has nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one lozenge every 1–2 hours.'
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Begin using the lozenge on your quit date.',
                'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                'Use up to 20 pieces per day as needed to reduce cravings.',
                'Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.'
             ],
             planningyourDay: 'The lozenge has nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before or during use.',
             quote: '"I quit today!”',
             videoUrl: 'https://www.youtube.com/watch?v=-Yg7_lwBcq0',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         counseling: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>2 times</strong> more likely to stay quit.</p> <p className="larger">Add NRT for an even greater chance to stay quit.</p>',
            face: 'images/nrt-animation-placeholder-2.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Counseling',
                    text: 'Tobacco cessation counseling is when you talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life. This type of counseling helps you break your tobacco habit.'
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Tell your health care provider that you’re quitting tobacco. They can give you counseling and suggest the best NRT for you.',
                'Using NRT together with counseling gives you the best chance of quitting smoking.',
                'Speak with a Quit VET counselor Monday–Friday. Dial 1-855-QUIT-VET (1-855-784-8838).',
                'Sign up for SmokefreeVET Text. Text VET to 47848 or go to smokefree.gov/vet.'
             ],
             planningyourDay: 'There are lots of ways to get counseling. On a weekly basis, you might try individual counseling one on one, attend a group session at your local VA, or speak with a counselor over the phone. For a daily support in between other counseling sessions, get encouraging and informative messages via text.',
             quote: '"I am DONE smoking.”',
             videoUrl: 'https://www.youtube.com/watch?v=FpxVj3Ic45w',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         patchGum: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>4 times</strong> more likely to stay quit.</p> <p className="larger">Add counseling for the best chance to stay quit.</p>',
            face: 'images/nrt-animation-placeholder-4.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Patch',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.',
                },
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Nicotine Gum',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.', 
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Begin using the patch and gum on your quit date.',
                'Each day, remove the old patch when you wake up and apply one new patch.',
                'Use a piece of nicotine gum as needed for strong cravings.',
                'Unlike regular gum, bite down slowly a few times until you have a slight tingling in your mouth.',
                'Park the gum between your cheek and gum. Leave it there for about 1 minute to absorb nicotine.',
                'Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.'
             ],
             planningyourDay: 'Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the gum is used as needed to control cravings.',
             quote: '"Doing well with the patch and gum.”',
             videoUrl: 'https://www.youtube.com/watch?v=4mG7leWt150',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         patchLozenge: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>4 times</strong> more likely to stay quit.</p> <p className="larger">Add counseling for the best chance to stay quit.</p>',
            face: 'images/nrt-animation-placeholder-4.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Patch',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.',
                },
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Lozenge',
                    text: 'The lozenge has nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one lozenge every 1–2 hours.' 
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Begin using the patch and lozenge on your quit date.',
                'Each day, remove the old patch when you wake up and apply one new patch.',
                'Use lozenges as needed to reduce cravings.',
                'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                'Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.'
             ],
             planningyourDay: 'Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the lozenge is used as needed to control cravings.',
             quote: '"I\’m 9 days cigarette-free!”',
             videoUrl: 'https://www.youtube.com/watch?v=WYsxpW9SokE',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         patchCounseling: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>3 times</strong> more likely to stay quit.</p> <p className="larger">Try adding the nicotine gum or lozenge for an even greater chance to stay quit.</p>',
            face: 'images/nrt-animation-placeholder-3.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Patch',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.',
                },
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Counseling',
                    text: 'Tobacco cessation counseling is when you talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life. This type of counseling helps you break your tobacco habit.' 
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Tell your health care provider that you’re quitting tobacco. They can give you counseling and suggest the best NRT for you.',
                'Begin using the patch on your quit date.',
                'Each day, remove the old patch when you wake up and apply one new patch.',
                'Avoid wearing the patch on the same area more than once a week.',
                'If you have trouble sleeping or vivid dreams, remove the patch before going to sleep.'
             ],
             planningyourDay: 'The patch provides a steady dose of nicotine for withdrawal relief throughout the day. When you wake up, remove your old patch and apply a new one. Apply only one patch at a time.',
             quote: '"No urges today!”',
             videoUrl: 'https://www.youtube.com/watch?v=WYsxpW9SokE',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         gumCounseling: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>3 times</strong> more likely to stay quit.</p> <p className="larger">Try adding the nicotine patch for an even greater chance to stay quit.</p>',
            face: 'images/nrt-animation-placeholder-3.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Nicotine Gum',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.'
                },
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Counseling',
                    text: 'Tobacco cessation counseling is when you talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life. This type of counseling helps you break your tobacco habit.' 
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Begin using the gum on your quit date.',
                'Unlike regular gum, bite down slowly a few times until you have a slight tingling in your mouth.',
                'Park the gum between your cheek and gum. Leave it there for about 1 minute to absorb nicotine.',
                'Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.',
                'Do not bite down too quickly or swallow the nicotine; it may make you nauseous or upset your stomach.',
                'Do not eat or drink 15 minutes before or during use.'
             ],
             planningyourDay: 'The gum has nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before or during use.',
             quote: '"I\’m taking it one craving at a time, one day at a time.”',
             videoUrl: 'https://www.youtube.com/watch?v=WYsxpW9SokE',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         lozengeCounseling: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>3 times</strong> more likely to stay quit.</p> <p className="larger">Try combining with the nicotine patch for an even greater chance to stay quit.</p>',
            face: 'images/nrt-animation-placeholder-3.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Nicotine Lozenge',
                    text: 'The lozenge has nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one lozenge every 1–2 hours.'
                },
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Counseling',
                    text: 'Tobacco cessation counseling is when you talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life. This type of counseling helps you break your tobacco habit.' 
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Begin using the lozenge on your quit date.',
                'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                'Use up to 20 pieces per day as needed to reduce cravings.',
                'Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.'
             ],
             planningyourDay: 'The lozenge has nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before or during use.',
             quote: '"I quit today!”',
             videoUrl: 'https://www.youtube.com/watch?v=WYsxpW9SokE',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         patchGumCounseling: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>4 times</strong> more likely to stay quit.</p> <p className="larger">Great job! You are maximizing your chances of staying quit.</p>',
            face: 'images/nrt-animation-placeholder-4.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Patch',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.',
                },
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Nicotine Gum',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.', 
                },
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Counseling',
                    text: 'Tobacco cessation counseling is when you talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life. This type of counseling helps you break your tobacco habit.' 
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Begin using the patch and gum on your quit date.',
                'Each day, remove the old patch when you wake up and apply one new patch.',
                'Use a piece of nicotine gum as needed for strong cravings.',
                'Unlike regular gum, bite down slowly a few times until you have a slight tingling in your mouth.',
                'Park the gum between your cheek and gum. Leave it there for about 1 minute to absorb nicotine.',
                'Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.',
             ],
             planningyourDay: 'Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the gum is used as needed to control cravings.',
             quote: '"Doing well with the patch and gum.”',
             videoUrl: 'https://www.youtube.com/watch?v=WYsxpW9SokE',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         },
         patchLozengeCounseling: {
            chancesOfStayingQuit: '<p className="larger">You are up to <strong>4 times</strong> more likely to stay quit.</p> <p className="larger">Great job! You are maximizing your chances of staying quit.</p>',
            face: 'images/nrt-animation-placeholder-4.jpg',
            lozengeDisabled: 'disabled',
            gumDisabled: '',
            youSelected: [
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Patch',
                    text: 'The patch will release small, but continuous amounts of nicotine through the skin. This helps to decrease withdrawal symptoms.',
                },
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Nicotine Lozenge',
                    text: 'The lozenge has nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one lozenge every 1–2 hours.'
                },
                {
                    iconPath: '../images/nrt-selection-icons-2x.png',
                    title: 'Counseling',
                    text: 'Tobacco cessation counseling is when you talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life. This type of counseling helps you break your tobacco habit.' 
                }
            ],
            factsSheetUrl: 'https://www.tobedetermined.com/',
            quickTips: [
                'Begin using the patch and lozenge on your quit date.',
                'Each day, remove the old patch when you wake up and apply one new patch.',
                'Use lozenges as needed to reduce cravings.',
                'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                'Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.'
             ],
             planningyourDay: 'Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the lozenge is used as needed to control cravings.',
             quote: '"I’m 9 days cigarette-free!”',
             videoUrl: 'https://www.youtube.com/watch?v=WYsxpW9SokE',
             gifImage: 'images/nrt-slider-placeholder.jpg'
         }
    }
}