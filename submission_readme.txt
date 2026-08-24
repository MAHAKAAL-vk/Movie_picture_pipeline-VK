Use program codes given by udacity, used github actions for CI/CD workflow, and deployed the application to aws using EKS and ECR.


To setup the requirements for the project, I used terraform to provision the necessary AWS resources, including an EKS cluster and an ECR repository.
The application code was containerized using Docker, and the Docker images were pushed to the ECR repository.
It automated the build and deployment process using GitHub Actions, which triggered on code commits to the main branch.
The workflow included steps for building the Docker image, running tests, and deploying the application to the EKS cluster.
At the final stage, I verified the deployment by accessing the application through the load balancer URL provided by the EKS service.
The entire CI/CD pipeline ensured that any changes made to the codebase were automatically tested and deployed, streamlining the development process and reducing manual intervention.

LINKS:-
*Backend-link:* http://a24f2df51aef74151baf897cef733831-1411316645.us-east-1.elb.amazonaws.com/movies
*Frontend-link:* http://aa163d2f83e044fbc8f367a9a456a381-1198607602.us-east-1.elb.amazonaws.com

NOTE:- 
1.Since the credits provided for the AWS account are over, the application may not be accessible at the moment. Please do refer to the secreenshots I have provided in the submission for the working of the application.
2. Make sure to open the links with http:// protocol only not with htttps:// protocol. Do not use Brave Browser, Firefox is recommended.
