# Kubernetes Start Up

1. Create secrets for the database
   - Secret: `kubectl create secret generic db-secrets --from-literal=[key]=[value]`
   - _DB_USERNAME_ and _DB_PASSWORD_ need to be set
2. Run with preconfigured YAML templates
   - `kubectl apply -f .k8s`
