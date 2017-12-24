pipeline {
  agent {
    docker {
      image 'node'
      args '-p 3000'
    }
    
  }
  stages {
    stage('install') {
      steps {
        sh 'yarn'
      }
    }
    stage('eslint') {
      steps {
        sh 'yarn eslint'
      }
    }
    stage('build') {
      steps {
        sh 'rm -rf build && yarn prod:build'
      }
    }
    stage('deploy') {
      steps {
        sh 'apt-get update && apt-get install ftp && chmod 777 build.sh && ./build.sh'
      }
    }
  }
}