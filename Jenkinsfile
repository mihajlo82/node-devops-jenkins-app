pipeline { 
    agent any

    tools {
        nodejs 'Node-20' // must match the name in Jenkins global config
    }

    environment {
        IMAGE_NAME = "node-devops-app"
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "🚀 Building Docker image: $IMAGE_NAME:$IMAGE_TAG"
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Deploy (Local)') {
            steps {
                echo "🚀 Deploying container: $IMAGE_NAME:$IMAGE_TAG"

                // Safe deploy: create new container first
                sh '''
                    docker run -d --name node-app-new -p 3000:3000 $IMAGE_NAME:$IMAGE_TAG
                    docker stop node-app || true
                    docker rm node-app || true
                    docker rename node-app-new node-app
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}
