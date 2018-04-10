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
  post {
      failure {
          mail to: '634407147@qq.com',
              subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
              body: "Something is wrong with ${env.BUILD_URL}"
      }
      success{
          mail to: '634407147@qq.com',
              subject: "Succeed Pipeline: ${currentBuild.fullDisplayName}",
              body: "Please checkout out http://www.meidengpaper.com!"
      }
  }
}