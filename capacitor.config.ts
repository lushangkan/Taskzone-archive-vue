import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cn.cutemc.taskzone',
  appName: 'Taskzone',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
