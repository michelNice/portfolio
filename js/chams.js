const Playoffs = [
    {
        liga:'Bunesliga',
        teams:['Bayern Munich','Leverkusen',' Borussia Dortmund','RB Leipzig']
    },
    {
        liga:'La liga',
        teams:['Real Madrid', 'Barcelona',' Atlético Madrid','Servilha']
    },
    {

        liga:'Premier ligue',
        teams:['Arsenal','Aston Villa','Liverpool','Chelsea'],
    },
    {
        liga:'Seria A',
        teams:['Juventos','Milan','Napoli','Como']
    }
]

const derby = []

const  teamsn = Playoffs.flatMap(league => {
 
    return league.teams.map(team => {

        return {
            name:team,
            league:league.liga
        }
    })
}).sort(()=> Math.random() - 0.5)


const clone = teamsn.slice()

function match(){

    while(clone.length >= 0){

        const teamA = clone[0]

        console.log(teamA)

    }

}


match()




