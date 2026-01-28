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
            when { expression { false } }
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Deploy (Local)') {
            when { expression { false } }
            steps {
                sh 'docker run ...'
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
