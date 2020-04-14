var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const variable = require('./constante')

var assert = require('assert');

// Connection URL
const url = variable.url;

// Database Name
const dbName = variable.mabase;

// test de la connextion
exports.connexionMongo = function (callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		assert.equal(null, err);
		callback(err, db);
	});
}

// Récupération de tous les cas 
exports.EnsembleDesCas = function (pageindex, pagesize, query, callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			db.collection(variable.collection_cas)
				.find(query)
				.skip(pageindex * pagesize)
				.limit(pagesize)
				.toArray()
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}

// count de l'ensemble des cas selon critère de recherche
exports.CountCases = function (query, callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			db.collection(variable.collection_cas)
				.find(query)
				.count()
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}

// Récupération information du cas by id
exports.CasById = function (id, callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);

		if (!err) {

			let myquery = { "_id": ObjectId(id) };

			db.collection(variable.collection_cas)
				.findOne(myquery, function (err, data) {
					let reponse;

					if (!err) {
						reponse = {
							succes: true,
							cas: data,
							error: null,
							msg: "Details du cas envoyés"
						};
					} else {
						reponse = {
							succes: false,
							cas: null,
							error: err,
							msg: "erreur lors du find"

						};
					}
					callback(reponse);
				});
		} else {
			let reponse = reponse = {
				succes: false,
				cas: null,
				error: err,
				msg: "erreur de connexion à la base"
			};
			callback(reponse);
		}
	});
}

// Récupération des temoignages du cas
exports.EnsembleDesTemByIdCas = function (pageindex, pagesize, id, callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			let myquery = { "id_cas": id };
			db.collection(variable.collection_tem)
				.find(myquery)
				.skip(pageindex * pagesize)
				.limit(pagesize)
				.toArray()
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}

// count des ensemble des temoigne selon id_cas
exports.CountDesTemByIdCas = function (id, callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			let myquery = { "id_cas": id };
			db.collection(variable.collection_tem)
				.find(myquery)
				.count()
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}

// Récupération des informations du temoignange by id
exports.TemById = function (id, callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);

		if (!err) {

			let myquery = { "_id": ObjectId(id) };

			db.collection(variable.collection_tem)
				.findOne(myquery, function (err, data) {
					let reponse;

					if (!err) {
						reponse = {
							succes: true,
							temoignage: data,
							error: null,
							msg: "Details du temoignage envoyés"
						};
					} else {
						reponse = {
							succes: false,
							temoignage: null,
							error: err,
							msg: "erreur lors du find"

						};
					}
					callback(reponse);
				});
		} else {
			let reponse = reponse = {
				succes: false,
				temoignage: null,
				error: err,
				msg: "erreur de connexion à la base"
			};
			callback(reponse);
		}
	});
}

// Récupération des zone nom
exports.GetZoneNom = function (callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			db.collection(variable.collection_cas)
				.distinct("cas_zone_nom")
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}

// Récupération des zone code
exports.GetZoneCode = function (callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			db.collection(variable.collection_cas)
				.distinct("cas_zone_code")
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}

// Récupération des JJ
exports.GetJJ = function (callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			db.collection(variable.collection_cas)
				.distinct("cas_JJ")
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}

// Récupération des MM
exports.GetMM = function (callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			db.collection(variable.collection_cas)
				.distinct("cas_MM")
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}

// Récupération des AAAA
exports.GetAAAA = function (callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			db.collection(variable.collection_cas)
				.distinct("cas_AAAA")
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}


////// utilisation de cette partie pour affichage des stats

// count des cas selon classification
exports.RepartitionCasParClassification = function (callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
		var db = client.db(dbName);
		if (!err) {
			db.collection(variable.collection_cas)
				.aggregate([
					{
						$group:{
							_id : "$cas_classification",
							count : { $sum : 1 }
						}
					}
				])
				.toArray()				
				.then(arr => callback(arr))
		} else {
			callback(-1)
		}
	})
}

// Count zone_nom
exports.RepartitionParZoneNom = function (callback) {
	MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
	var db = client.db(dbName);
	if(!err) {
		db.collection(variable.collection_cas)
		.aggregate([
			{$group:{_id:"$cas_zone_nom",
			count:{$sum : 1}}
		    } , 
			{$sort:{"_id":1}}
        ])
		.toArray()
		.then(arr => callback(arr))
	} else {
		callback(-1)
	}
	})
}