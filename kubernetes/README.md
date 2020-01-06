# Kubernetes Start Up
1. Create configMaps and secrets for Postgres and GraphQL
	* ConfigMap:
		1. `kubectl create cm postgres-config --from-env-file=postgres.env`
		1. `kubectl create cm graphql-config --from-env-file=graphql.env`
	* Secret:
	`kubectl create secret generic [secret-name] --from-literal=[key]=[value]` 
		* *DB_USERNAME* and *DB_PASSWORD* need to be set
2. Run deployments for Postgres and GraphQL
	* `kubectl apply -f postgres.deployment.yml`
	* `kubectl apply -f graphql.deployment.yml`
3. Run service for backend
	* `kubectl apply -f backend.service.yml`