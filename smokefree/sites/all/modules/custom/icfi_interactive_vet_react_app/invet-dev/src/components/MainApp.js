import React, { Component } from 'react';

import Calculator from './Calculator';
import StayingQuit from './StayingQuit';
import TherapySelection from './TherapySelection';
import QuitTipsVideo from './QuitTipsVideo';
import DayPlanningBlock from './DayPlanningBlock';

class MainApp extends Component {
    constructor() {
        super();
        this.state = {
            changes: {
                chancesOfStayingQuit: {
                    times: 'Many people choose to quit without any assistance—also known as “quitting cold turkey.” But data show that you are much more likely to stay quit if you use aids like NRT and counseling.',
                    paragraphTwo: [<strong>Select one or more</strong> ," of the therapies above to see how your likelihood of staying quit could change."]
                },
                face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-1.jpg',
                lozengeDisabled: {
                    className: "",
                    inLine: ""
                },
                gumDisabled: {
                    className: "",
                    inLine: ""
                },
                youSelected: [
                    {
                        iconPath: "",
                        text: 'Please make a selection above.',
                        showButton: false,
                    }
                ],
                factsSheetUrl: '#',
                quickTips: [
                    'Begin using the patch and lozenge on your quit date.',
                    'Each day, remove the old patch when you wake up, and apply one new patch.',
                    'Use lozenges as needed to control cravings.',
                    'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                    'Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.'
                ],
                quitTipsIconPatch: 'none',
                quitTipsIconGum: 'none',
                quitTipsIconCounseling: 'none',
                quitTipsIconLozenge: 'none',
                planningyourDay: 'Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the lozenge is used as needed to control cravings.',
                quote: 'I’m 9 days cigarette-free!',
                videoUrl: 'https://www.youtube.com/embed/hfT4NU-NTY4?rel=0',
                gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_GREEN-_PATCH+GUM-LOZENGE+COUNSELING.gif'
            }
        }
    }
    render() {
        const checkBoxHandler = (e) => {
            const patch = document.getElementById('patch-box');
            const gum = document.getElementById('gum-box');
            const lozenge = document.getElementById('lozenge-box');
            const counseling = document.getElementById('counseling-box');
            if(patch.checked === true) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are up to ", <strong>2 times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Try combining with the nicotine gum or lozenge for an even greater chance of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-2.jpg',
                        lozengeDisabled: {
                            className: "",
                            inLine: false
                        },
                        gumDisabled: {
                            className: "",
                            inLine: false
                        },
                        youSelected:[
                            {
                                iconPath: 'patch-icon',
                                title: 'Patch',
                                text: 'The patch will release small but continuous amounts of nicotine into the body through the skin. This helps to decrease withdrawal symptoms.',
                                showButton: true
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Patch_Factsheet_508.pdf',
                        quickTips: [
                            'Begin using the patch on your quit date.',
                            'Each day, remove the old patch when you wake up, and apply one new patch.',
                            'Avoid wearing the patch on the same area more than once a week.',
                            'If you have trouble sleeping or have vivid dreams, remove the patch before going to sleep.'
                        ],
                        quitTipsIconPatch: 'inline-block',
                        quitTipsIconGum: 'none',
                        quitTipsIconCounseling: 'none',
                        quitTipsIconLozenge: 'none',
                        planningyourDay: 'The patch provides a steady dose of nicotine for withdrawal relief throughout the day. When you wake up, remove your old patch and apply a new one. Apply only one patch at a time.',
                        quote: 'No urges today!',
                        videoUrl: 'https://www.youtube.com/embed/6S8UnLKVwiM?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_BLUE-RED_PATCH.gif'
                    }
                })
            }  if(gum.checked === true) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are ", <strong>2+ times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Try combining with the nicotine patch for an even greater chance of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-2.jpg',
                        lozengeDisabled: {
                            className: 'disabled',
                            inLine: true
                        },
                        gumDisabled: {
                            className: "empty",
                            inLine: false
                        },
                        youSelected: [
                            {
                                iconPath: 'gum-icon',
                                title: 'Nicotine Gum',
                                text: 'The gum releases nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one piece every 1–2 hours.',
                                showButton: true
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Gum_Factsheet_508.pdf',
                        quickTips: [
                            'Begin using the gum on your quit date.',
                            'Unlike regular gum, bite down slowly a few times until you have a slight tingling in your mouth.',
                            'Park the gum between your cheek and gum. Leave it there for about 1 minute so you can absorb the nicotine.',
                            'Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.',
                            'Do not bite down too quickly on the gum or swallow the nicotine; it may make you nauseous or upset your stomach.',
                            'Do not eat or drink 15 minutes before using the gum or during use.'
                        ],
                        quitTipsIconPatch: 'none',
                        quitTipsIconGum: 'inline-block',
                        quitTipsIconCounseling: 'none',
                        quitTipsIconLozenge: 'none',
                        planningyourDay: 'The gum releases nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before using the gum or during use.',
                        quote: 'I’m taking it one craving at a time, one day at a time.',
                        videoUrl: 'https://www.youtube.com/embed/LRMAM29TtTk?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_BLUE-RED_GUM-LOZENGE.gif'
                    }
                })
            }  if(lozenge.checked === true) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are up to ", <strong>3 times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Try combining with the nicotine patch for an even greater chance of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-2.jpg',
                        lozengeDisabled: {
                            className: '',
                            inLine: false
                        },
                        gumDisabled: {
                            className: 'disabled',
                            inLine: true
                        },
                        youSelected: [
                            {
                                iconPath: 'lozenge-icon',
                                title: 'Nicotine Lozenge',
                                text: 'The lozenge releases nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one lozenge every 1–2 hours.',
                                showButton: true
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Lozenge_Factsheet_508.pdf',
                        quickTips: [
                            'Begin using the lozenge on your quit date.',
                            'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                            'Use up to 20 pieces per day as needed to control cravings.',
                            'Do not chew or swallow the lozenge; it may make you nauseated or upset your stomach.'
                        ],
                        quitTipsIconPatch: 'none',
                        quitTipsIconGum: 'none',
                        quitTipsIconCounseling: 'none',
                        quitTipsIconLozenge: 'inline-block',
                        planningyourDay: 'The lozenge has nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before or during use.',
                        quote: 'I quit today!',
                        videoUrl: 'https://www.youtube.com/embed/7cIG8jlPwJw?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_BLUE-RED_GUM-LOZENGE.gif'
                    }
                })
            }  if(counseling.checked === true) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are up to ", <strong>2 times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Add NRT for an even greater chance of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-2.jpg',
                        lozengeDisabled: {
                            className: "",
                            inLine: false
                        },
                        gumDisabled: {
                            className: "",
                            inLine: false
                        },
                        youSelected: [
                            {
                                iconPath: 'counseling-icon',
                                title: 'Counseling',
                                text: 'Tobacco cessation counseling is when you talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life. This type of counseling helps you break your tobacco habit.',
                                showButton: true
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Counseling_Factsheet_508.pdf',
                        quickTips: [
                            'Tell your health care provider that you’re quitting tobacco. They can give you counseling and suggest the best NRT for you.',
                            'Using NRT together with counseling gives you the best chance of quitting smoking.',
                            'Speak with a Quit VET counselor Monday–Friday. Dial 1-855-QUIT-VET (1-855-784-8838).',,
                            ["Sign up for SmokefreeVET Text. Text VET to 47848 or go to ", <a href="https://smokefree.gov/tools-tips/text-programs/quit-for-good/smokefreevet" target="_blank">smokefree.gov/vet</a> ,"."],
                        ],
                        quitTipsIconPatch: 'none',
                        quitTipsIconGum: 'none',
                        quitTipsIconCounseling: 'inline-block',
                        quitTipsIconLozenge: 'none',
                        planningyourDay: 'There are lots of ways to get counseling. On a weekly basis, you might try individual one-on-one counseling sessions, attend a group session at your local VA, or speak with a counselor over the phone. For daily support in between other counseling sessions, get encouraging and informative messages via text.',
                        quote: 'I am DONE smoking.',
                        videoUrl: 'https://www.youtube.com/embed/5BcoasP1VOo?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_YELLOW.gif'
                    }
                })
            }  if(patch.checked === true && gum.checked === true) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are up to ", <strong>4 times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Add counseling for the best chance of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-4.jpg',
                        lozengeDisabled: {
                            className: 'disabled',
                            inLine: true
                        },
                        gumDisabled: {
                            className: "",
                            inLine: false
                        },
                        youSelected: [
                            {
                                iconPath: 'patch-icon',
                                title: 'Patch',
                                text: 'The patch will release small but continuous amounts of nicotine into the body through the skin. This helps to decrease withdrawal symptoms.',
                                showButton: true
                            },
                            {
                                iconPath: 'gum-icon',
                                title: 'Nicotine Gum',
                                text: 'The gum releases nicotine to help decrease withdrawal symptoms.',
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Patch_Gum_Combo_Factsheet_508.pdf',
                        quickTips: [
                            'Begin using the patch and gum on your quit date.',
                            'Each day, remove the old patch when you wake up, and apply one new patch.',
                            'Use a piece of nicotine gum as needed for strong cravings.',
                            'Unlike regular gum, bite down slowly a few times until you feel a slight tingling in your mouth.',
                            'Park the gum between your cheek and gum. Leave it there for about 1 minute so you can absorb the nicotine.',
                            'Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.'
                        ],
                        quitTipsIconPatch: 'inline-block',
                        quitTipsIconGum: 'inline-block',
                        quitTipsIconCounseling: 'none',
                        quitTipsIconLozenge: 'none',
                        planningyourDay: 'Using combination therapy increases your chances of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the gum is used as needed to control cravings.',
                        quote: 'Doing well with the patch and gum.',
                        videoUrl: 'https://www.youtube.com/embed/hfT4NU-NTY4?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_GREEN_PATCH+GUM-LOZEENGE.gif'
                    }
                })
            }  if(patch.checked === true && lozenge.checked === true) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are up to ", <strong>4 times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Add counseling for the best chance of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-4.jpg',
                        lozengeDisabled: {
                            className: "",
                            inLine: false
                        },
                        gumDisabled: {
                            className: 'disabled',
                            inLine: true
                        },
                        youSelected: [
                            {
                                iconPath: 'patch-icon',
                                title: 'Patch',
                                text: 'The patch will release small but continuous amounts of nicotine into the body through the skin. This helps to decrease withdrawal symptoms.',
                                showButton: true
                            },
                            {
                                iconPath: 'lozenge-icon',
                                title: 'Lozenge',
                                text: 'The lozenge releases nicotine to help decrease withdrawal symptoms. '
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Patch_Lozenge_Combo_508.pdf',
                        quickTips: [
                            'Begin using the patch and lozenge on your quit date.',
                            'Each day, remove the old patch when you wake up, and apply one new patch.',
                            'Use lozenges as needed to control cravings.',
                            'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                            'Do not chew or swallow the lozenge; it may make you nauseated or upset your stomach.'
                        ],
                        quitTipsIconPatch: 'inline-block',
                        quitTipsIconGum: 'none',
                        quitTipsIconCounseling: 'none',
                        quitTipsIconLozenge: 'inline-block',
                        planningyourDay: 'Using combination therapy increases your chances of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the lozenge is used as needed to control cravings.',
                        quote: 'I’m 9 days cigarette-free!',
                        videoUrl: 'https://www.youtube.com/embed/hfT4NU-NTY4?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_GREEN_PATCH+GUM-LOZEENGE.gif'
                    }
                })
            }  if((patch.checked === true) && (counseling.checked === true)) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are ", <strong>3+ times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Try adding the nicotine gum or lozenge for an even greater chance of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-3.jpg',
                        lozengeDisabled: {
                            className: "",
                            inLine: false
                        },
                        gumDisabled: {
                            className: "",
                            inLine: false
                        },
                        youSelected: [
                            {
                                iconPath: 'patch-icon',
                                title: 'Patch',
                                text: 'The patch will release small but continuous amounts of nicotine into the body through the skin. This helps to decrease withdrawal symptoms.',
                                showButton: true
                            },
                            {
                                iconPath: 'counseling-icon',
                                title: 'Counseling',
                                text: 'Talk with a healthcare provider or a counselor about your tobacco use, and work on ways to get tobacco out of your life'
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Patch_Factsheet+Counseling_508.pdf',
                        quickTips: [
                            'Tell your health care provider that you’re quitting tobacco. They can give you counseling and suggest the best NRT for you.',
                            'Begin using the patch on your quit date.',
                            'Each day, remove the old patch when you wake up, and apply one new patch.',
                            'Avoid wearing the patch on the same area more than once a week.',
                            'If you have trouble sleeping or have vivid dreams, remove the patch before going to sleep.'
                        ],
                        quitTipsIconPatch: 'inline-block',
                        quitTipsIconGum: 'none',
                        quitTipsIconCounseling: 'inline-block',
                        quitTipsIconLozenge: 'none',
                        planningyourDay: 'The patch provides a steady dose of nicotine for withdrawal relief throughout the day. When you wake up, remove your old patch and apply a new one. Apply only one patch at a time.',
                        quote: 'No urges today!',
                        videoUrl: 'https://www.youtube.com/embed/6S8UnLKVwiM?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_BLUE-RED_PATCH+COUNSELING.gif'
                    }
                })
            }  if((gum.checked === true) && (counseling.checked === true)) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are ", <strong>3+ times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Try adding the nicotine patch for an even greater chance of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-3.jpg',
                        lozengeDisabled: {
                            className: 'disabled',
                            inLine: true
                        },
                        gumDisabled: {
                            className: "",
                            inLine: false
                        },
                        youSelected: [
                            {
                                iconPath: 'gum-icon',
                                title: 'Nicotine Gum',
                                text: 'The gum releases nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one piece every 1–2 hours.',
                                showButton: true
                            },
                            {
                                iconPath: 'counseling-icon',
                                title: 'Counseling',
                                text: 'Talk with a health care provider or a counselor about your tobacco use and work on ways to get tobacco out of your life.'
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Gum+Counseling_Factsheet_508.pdf',
                        quickTips: [
                            'Begin using the gum on your quit date.',
                            'Unlike what you do with regular gum, bite down slowly a few times until you feel a slight tingling in your mouth.',
                            'Park the gum between your cheek and gum. Leave it there for about 1 minute so you can absorb the nicotine.',
                            'Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.',
                            'Do not bite down too quickly on the gum or swallow the nicotine; it may make you nauseous or upset your stomach.',
                            'Do not eat or drink 15 minutes before using the gum or during use.'
                        ],
                        quitTipsIconPatch: 'none',
                        quitTipsIconGum: 'inline-block',
                        quitTipsIconCounseling: 'inline-block',
                        quitTipsIconLozenge: 'none',
                        planningyourDay: 'The gum releases nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before using the gum or during use.',
                        quote: 'I’m taking it one craving at a time, one day at a time.',
                        videoUrl: 'https://www.youtube.com/embed/LRMAM29TtTk?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_BLUE-RED_GUM-LOZENGE+COUNSELING.gif'
                    }
                })
            }  if((lozenge.checked === true) && (counseling.checked === true)) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are ", <strong>3+ times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Try combining with the nicotine patch for an even greater chance of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-3.jpg',
                        lozengeDisabled: {
                            className: "",
                            inLine: false
                        },
                        gumDisabled: {
                            className: 'disabled',
                            inLine: true
                        },
                        youSelected: [
                            {
                                iconPath: 'lozenge-icon',
                                title: 'Nicotine Lozenge',
                                text: 'The lozenge releases nicotine to help decrease withdrawal symptoms. Use throughout the day to control cravings. During the first week, use one lozenge every 1–2 hours.',
                                showButton: true
                            },
                            {
                                iconPath: 'counseling-icon',
                                title: 'Counseling',
                                text: 'Talk with a healthcare provider or a counselor about your tobacco use, and work on ways to get tobacco out of your life.'
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Lozenge+Counseling_Factsheet_508.pdf',
                        quickTips: [
                            'Begin using the lozenge on your quit date.',
                            'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                            'Use up to 20 pieces per day as needed to control cravings.',
                            'Do not chew or swallow the lozenge; it may make you nauseated or upset your stomach.'
                        ],
                        quitTipsIconPatch: 'none',
                        quitTipsIconGum: 'none',
                        quitTipsIconCounseling: 'inline-block',
                        quitTipsIconLozenge: 'inline-block',
                        planningyourDay: 'The lozenge releases nicotine to help decrease withdrawal symptoms. Use it regularly to control cravings throughout the day. Do not eat or drink 15 minutes before using the lozenge or during use.',
                        quote: 'I quit today!',
                        videoUrl: 'https://www.youtube.com/embed/7cIG8jlPwJw?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_BLUE-RED_GUM-LOZENGE+COUNSELING.gif'
                    }
                })
            }  if((patch.checked === true) && (gum.checked === true) && (counseling.checked === true)) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are ", <strong>4+ times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Great job! You are maximizing your chances of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-4.jpg',
                        lozengeDisabled: {
                            className: 'disabled',
                            inLine: true
                        },
                        gumDisabled: {
                            className: "",
                            inLine: false
                        },
                        youSelected: [
                            {
                                iconPath: 'patch-icon',
                                title: 'Patch',
                                text: 'The patch will release small but continuous amounts of nicotine into the body through the skin. This helps to decrease withdrawal symptoms.',
                                showButton: true
                            },
                            {
                                iconPath: 'gum-icon',
                                title: 'Nicotine Gum',
                                text: 'The gum releases nicotine to help decrease withdrawal symptoms.',
                            },
                            {
                                iconPath: 'counseling-icon',
                                title: 'Counseling',
                                text: 'Talk with a healthcare provider or a counselor about your tobacco use, and work on ways to get tobacco out of your life.'
                            }
                        ],
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Patch_Gum_Combo+Counseling_Factsheet_508.pdf',
                        quickTips: [
                            'Begin using the patch and gum on your quit date.',
                            'Each day, remove the old patch when you wake up, and apply one new patch.',
                            'Use a piece of nicotine gum as needed to control cravings.',
                            'Unlike regular gum, bite down slowly a few times until you feel a slight tingling in your mouth.',
                            'Park the gum between your cheek and gum. Leave it there for about 1 minute so you can absorb the nicotine.',
                            'Repeat biting and parking until the taste or tingle is gone. One piece of gum lasts 20–30 minutes.',
                        ],
                        quitTipsIconPatch: 'inline-block',
                        quitTipsIconGum: 'inline-block',
                        quitTipsIconCounseling: 'inline-block',
                        quitTipsIconLozenge: 'none',
                        planningyourDay: 'Using combination therapy increases your chances of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the gum is used as needed to control cravings.',
                        quote: 'Doing well with the patch and gum.',
                        videoUrl: 'https://www.youtube.com/embed/hfT4NU-NTY4?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_GREEN-_PATCH+GUM-LOZENGE+COUNSELING.gif'
                    }
                })
            }  if((patch.checked === true) && (lozenge.checked === true) && (counseling.checked === true)) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: ["You are ", <strong>4+ times</strong> ," more likely to stay quit."],
                            paragraphTwo: 'Great job! You are maximizing your chances of staying quit.'
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-4.jpg',
                        lozengeDisabled: {
                            className: '',
                            inLine: false
                        },
                        gumDisabled: {
                            className: "disabled",
                            inLine: true
                        },
                        youSelected: [
                            {
                                iconPath: 'patch-icon',
                                title: 'Patch',
                                text: 'The patch will release small but continuous amounts of nicotine into the body through the skin. This helps to decrease withdrawal symptoms.',
                                showButton: true
                            },
                            {
                                iconPath: 'lozenge-icon',
                                title: 'Lozenge',
                                text: 'The lozenge releases nicotine to help decrease withdrawal symptoms.'
                            },
                            {
                                iconPath: 'counseling-icon',
                                title: 'Counseling',
                                text: 'Talk with a healthcare provider or a counselor about your tobacco use, and work on ways to get tobacco out of your life.'
                            }
                        ],
                        quitTipsIconPatch: 'inline-block',
                        quitTipsIconGum: 'none',
                        quitTipsIconCounseling: 'inline-block',
                        quitTipsIconLozenge: 'inline-block',
                        factsSheetUrl: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/pdf/SfVET_Patch_Lozenge_Combo+Counseling_508.pdf',
                        quickTips: [
                            'Begin using the patch and lozenge on your quit date.',
                            'Each day, remove the old patch when you wake up, and apply one new patch.',
                            'Use lozenges as needed to control cravings.',
                            'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                            'Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.'
                        ],
                        planningyourDay: 'Using combination therapy increases your chances of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the lozenge is used as needed to control cravings.',
                        quote: 'I’m 9 days cigarette-free!',
                        videoUrl: 'https://www.youtube.com/embed/hfT4NU-NTY4?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_GREEN-_PATCH+GUM-LOZENGE+COUNSELING.gif'
                    }
                })
            } if((patch.checked === false) && (lozenge.checked === false) && (gum.checked === false) && (counseling.checked === false)) {
                this.setState({
                    changes: {
                        chancesOfStayingQuit: {
                            times: 'Many people choose to quit without any assistance—also known as “quitting cold turkey.” But data show that you are much more likely to stay quit if you use aids like NRT and counseling. ',
                            paragraphTwo: [<strong>Select one or more</strong> ," of the therapies above to see how your likelihood of staying quit could change."]
                        },
                        face: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/nrt-animation-placeholder-1.jpg',
                        lozengeDisabled: {
                            className: "",
                            inLine: ""
                        },
                        gumDisabled: {
                            className: "",
                            inLine: ""
                        },
                        youSelected: [
                            {
                                iconPath: "",
                                text: 'Please make a selection above.',
                                showButton: false
                            }
                        ],
                        factsSheetUrl: '#',
                        quickTips: [
                            'Begin using the patch and lozenge on your quit date.',
                            'Each day, remove the old patch when you wake up, and apply one new patch.',
                            'Use lozenges as needed to control cravings.',
                            'Let the lozenge slowly dissolve in your mouth near your cheek and gum.',
                            'Do not chew or swallow the lozenge; it may make you nauseous or upset your stomach.'
                        ],
                        quitTipsIconPatch: 'none',
                        quitTipsIconGum: 'none',
                        quitTipsIconCounseling: 'none',
                        quitTipsIconLozenge: 'none',
                        planningyourDay: 'Using combination therapy increases your chance of staying quit. The patch provides a steady dose of nicotine for withdrawal relief, while the lozenge is used as needed to control cravings.',
                        quote: 'I’m 9 days cigarette-free!',
                        videoUrl: 'https://www.youtube.com/embed/hfT4NU-NTY4?rel=0',
                        gifImage: '/sites/all/modules/custom/icfi_interactive_vet_react_app/build/images/SLIDER_GREEN-_PATCH+GUM-LOZENGE+COUNSELING.gif'
                    }
                })
            }
        }

        return (
            <div className="container">
                <div className="row">
                    <div id="nrt-selection">
                        <div className="col-sm-3 col-xs-6">
                            <div className="checkbox nrt-selection card-gray">
                                <label id="patch"><input id="patch-box" name="nrt" onChange={checkBoxHandler.bind(this)} type="checkbox" className="nrt-selection-checkbox" value="patch" />Patch</label>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                            <div className={`checkbox nrt-selection card-gray ${this.state.changes.gumDisabled.className}`}>
                                <label id="gum"><input id="gum-box" name="nrt" onChange={checkBoxHandler.bind(this)} type="checkbox" className="nrt-selection-checkbox" disabled={this.state.changes.gumDisabled.inLine} value="" />Gum</label>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                            <div className={`checkbox nrt-selection card-gray ${this.state.changes.lozengeDisabled.className}`}>
                                <label id="lozenge"><input id="lozenge-box" name="nrt" onChange={checkBoxHandler.bind(this)} type="checkbox"  className="nrt-selection-checkbox" disabled={this.state.changes.lozengeDisabled.inLine} value=""/>Lozenge</label>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-6">
                            <div className="checkbox nrt-selection card-gray">
                                <label id="counseling"><input id="counseling-box" name="nrt" onChange={checkBoxHandler.bind(this)} type="checkbox" className="nrt-selection-checkbox" value=""/>Counseling</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <StayingQuit times={this.state.changes.chancesOfStayingQuit.times} paragraphTwo={this.state.changes.chancesOfStayingQuit.paragraphTwo} face={this.state.changes.face} />
                    <TherapySelection youSelected={this.state.changes.youSelected} showButton={this.state.changes.youSelected[0].showButton} factsSheetUrl={this.state.changes.factsSheetUrl} />
                </div>
                <div className="spacer-30"></div>
                <QuitTipsVideo videoUrl={this.state.changes.videoUrl} quitTipsIconPatch={this.state.changes.quitTipsIconPatch} quitTipsIconGum={this.state.changes.quitTipsIconGum} quitTipsIconLozenge={this.state.changes.quitTipsIconLozenge} quitTipsIconCounseling={this.state.changes.quitTipsIconCounseling} quickTips={this.state.changes.quickTips} />
                <div className="spacer-30"></div>
                <DayPlanningBlock quitTipsIconPatch={this.state.changes.quitTipsIconPatch} quitTipsIconGum={this.state.changes.quitTipsIconGum} quitTipsIconLozenge={this.state.changes.quitTipsIconLozenge} quitTipsIconCounseling={this.state.changes.quitTipsIconCounseling} planningyourDay={this.state.changes.planningyourDay} quote={this.state.changes.quote} gifImage={this.state.changes.gifImage}  />
                <div className="spacer-30"></div>
                <Calculator />
            </div>
        )
    }
}
export default MainApp;