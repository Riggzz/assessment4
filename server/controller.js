module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "An important person will offer you support.", "Be careful or you could fall for some tricks today", "Believe it can be done", "Congratulations! You are on your way."];

        let randomizer = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomizer];

        res.status(200).send(randomFortune);
    },

}