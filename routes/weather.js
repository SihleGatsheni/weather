const router = require('express').Router();
const fetch = require('node-fetch');
const API_KEY = '01b99878f159b457675a12f35dba7c6c';
//require('dotenv').config()
router.get('/', (req, res ) =>{
res.render('index',{
				city: null,
				des: null,
				icon: null,
				temp: null

});
});

router.post('/', async(req,res) =>{
	const city = req.body.city;
	const url_api = "http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}";
	try{
		await fetch(url_api)
				.then(res =>res.json())
				.then(data => {
					console.log(data)
				if(data.message === "city not found"){
							res.render('index',{
								city: data.message,
								des: null,
								icon: null,
								temp: null
							})


						}else{
							const city = data.name;
							const des = data.weather[0].description;
							const icon = data.weather[0].icon;
							const temp =data.main.temp;

							res.render('index',{
								city,des,icon,temp
							});
						}

				});

				

				  
	
	}catch(err){
		//do something here
		res.render('index',{
			city: 'something went wrong',
			des: null,
			icon: null,
			temp:null

		})
	}
	
});


module.exports = router;
