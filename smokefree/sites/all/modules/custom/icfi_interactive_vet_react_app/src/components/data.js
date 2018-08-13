
const tipData = {
    tips:[
        {
            tipId: 1, 
            tipTitle: 'NRT works.', 
            tipText: 'NRT can double a smoker’s chances of quitting smoking for good.', 
            buttonText: 'NEXT FACT'
        },
        {
            tipId: 2, 
            tipTitle: 'NRT helps with tough cravings.', 
            tipText: 'The worst withdrawal symptoms usually last only a few days to a couple of weeks. NRT can help make these symptoms less intense.', 
            buttonText: 'NEXT FACT'
        },
        {
            tipId: 3, 
            tipTitle: 'Combining NRT improves your chances of staying quit.', 
            tipText: 'NRT products can be used safely together. Try a long-acting patch with a short-acting lozenge or gum to fight off cravings.', 
            buttonText: 'NEXT FACT'
        },
        {
            tipId: 4, 
            tipTitle: 'It’s OK if you slip up.', 
            tipText: 'It is safe to continue using NRT even if you slip and smoke one or two cigarettes. Staying on NRT increases your chances of getting back on track for quitting.', 
            buttonText: 'NEXT FACT'
        },
        {
            tipId: 5, 
            tipTitle: 'NRT is safe.', 
            tipText: 'Research shows that NRT is safe and effective for almost all adults. Pregnant women, teens, and people with serious health issues should talk to their doctor before using NRT.', 
            buttonText: 'NEXT FACT'
        },
        {
            tipId: 6, 
            tipTitle: 'NRT is available over the counter.', 
            tipText: 'NRT is so safe, it doesn’t require a doctor’s prescription.'
        },
        {
            tipId: 7, 
            tipTitle: 'NRT is designed to prevent addiction.', 
            tipText: 'NRT delivers far less nicotine than cigarettes or smokeless tobacco products do, and much more slowly. This makes it less addictive. Most people find it easy to get off nicotine medicines after a few months.', 
            buttonText: 'START OVER'
        }
    ]
}

const calculatorData = {
    cigarettes: [
        {
            dosage: '10 or fewer',
            gum: '2mg',
            patch: '14mg'
        },
        {
            dosage: '11-20',
            gum: '2mg',
            patch: '21mg'
        },
        {
            dosage: '21 or more',
            gum: '4mg',
            patch: '21mg'
        }
    ],
    chew: {
        withinFiveMinutes: {
            selection: 'Within 5 Minutes',
            amountOfCans: {
                one: {
                    amount: '1',
                    gum: '2mg',
                    patch: '21mg'
                },
                twoToThree: {
                    amount: '2-3',
                    gum: '2mg',
                    patch: '21mg'
                },
                moreThanThree: {
                    amount: 'More than 3',
                    gum: '4mg',
                    patch: '21mg'
                }
            }
        },
        sixToThirty: {
            selection: '6-30 Minutes',
            amountOfCans: {
                one: {
                    amount: '1',
                    gum: '2mg',
                    patch: '14mg'
                },
                twoToThree: {
                    amount: '2-3',
                    gum: '2mg',
                    patch: '21mg'
                },
                moreThanThree: {
                    amount: 'More than 3',
                    gum: '2mg',
                    patch: '21mg'
                }
            }
        },
        thirtyOneToSixty: {
            selection: '31-60 Minutes',
            amountOfCans: {
                one: {
                    amount: '1',
                    gum: '2mg',
                    patch: '14mg'
                },
                twoToThree: {
                    amount: '2-3',
                    gum: '2mg',
                    patch: '14mg'
                },
                moreThanThree: {
                    amount: 'More than 3',
                    gum: '2mg',
                    patch: '21mg'
                }
            }
        },
        afterSixty: {
            selection: 'After 60 Minutes',
            amountOfCans: {
                one: {
                    amount: '1',
                    gum: '2mg',
                    patch: '14mg'
                },
                twoToThree: {
                    amount: '2-3',
                    gum: '2mg',
                    patch: '14mg'
                },
                moreThanThree: {
                    amount: 'More than 3',
                    gum: '2mg',
                    patch: '14mg'
                }
            }
        },
        

    }
}

