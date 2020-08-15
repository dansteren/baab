# Kubernetes Start Up

## Kubernetes in 5 minutes

Kubernetes takes care of spinning up all containers for a project as well as:

- Keeping containers alive/well
- Inter-container communication
- Horizontal scaling of containers

### Key terms

**Dockerfile** - A set of instructions that will start with an empty OS, install the required dependencies, compile/transpile code, and generally get everything ready for running a program.

**Image** - Built from a Dockerfile, this is essentially a snapshot of system that is ready to run a program, as well as the command to actually start the program. It just requires passing in a few environment variables.

**Container** - A "virtual machine" that runs an image. Supplies environment variables to the image. Only lives as long as the program is running.

**Pod** - Runs one (or _rarely_ more) containers.

**Deployment** - Runs one or more pods. Controls the horizontal scaling of the pods (number of pods). Ensures that the correct number of pods exist at any given time (creates new pods as they quit unexpectedly or become un-healthy).

**ConfigMap** - A mapping, stored in Kubernetes which can be used to supply environment variables to deployments/pods/containers.

**Secrets** - A secret is a specialized secure configmap that holds a number of key/value pairs.

**Service** - Allows inter-pod communication and (if configured) load balancing.

## Starting up the app

1. Create configMaps for containers from our env files.

   ```shell
   kubectl create configmap postgres-config --from-env-file=kubernetes/postgres/postgres.env
   ```

   ```shell
   kubectl create configmap graphql-config --from-env-file=kubernetes/graphql/graphql.env
   ```

2. Create secret for containers with two key/value pairs.

   ```shell
   kubectl create secret generic db-secrets \
      --from-literal=DB_USERNAME=<db_username_here>
      --from-literal=DB_PASSWORD=<db_password_here>
   ```

   replacing `<db_username_here>` and `<db_password_here>` with the real values.

3. Start up the pods by running the deployments for Postgres and GraphQL

   ```shell
   kubectl apply -f kubernetes/postgres/postgres.deployment.yml
   ```

   ```shell
   kubectl apply -f kubernetes/graphql/graphql.deployment.yml
   ```

4. Get the pods talking to each other by starting the baab service

   ```shell
   kubectl apply -f kubernetes/baab.service.yml
   ```
