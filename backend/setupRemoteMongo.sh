# Setup file template to upload data to MongoDB Atlas
mongoimport --uri "mongodb://vaishnavibondadec:vOhIKeipJj3SDY4V@cluster0-shard-00-00.m1tufdm.mongodb.net:27017,cluster0-shard-00-01.m1tufdm.mongodb.net:27017,cluster0-shard-00-02.m1tufdm.mongodb.net:27017/?ssl=true&replicaSet=atlas-cd2zuq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0" \
  --ssl \
  --authenticationDatabase admin \
  --username vaishnavibondadec \
  --password vOhIKeipJj3SDY4V \
  --drop \
  --collection users \
  --file data/export_qkart_users.json

mongoimport --uri "mongodb://vaishnavibondadec:vOhIKeipJj3SDY4V@cluster0-shard-00-00.m1tufdm.mongodb.net:27017,cluster0-shard-00-01.m1tufdm.mongodb.net:27017,cluster0-shard-00-02.m1tufdm.mongodb.net:27017/?ssl=true&replicaSet=atlas-cd2zuq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0" \
 --ssl \
 --authenticationDatabase admin \
 --username chintuthecoder \
 --password vOhIKeipJj3SDY4V \
 --drop \
 --collection products \
 --file data/export_qkart_products.json