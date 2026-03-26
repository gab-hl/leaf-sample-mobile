import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  // #region agent log
  fetch('http://127.0.0.1:7311/ingest/85060403-6b8c-4f98-b20f-33b757007c58',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'d1c231'},body:JSON.stringify({sessionId:'d1c231',runId:'pre-fix',hypothesisId:'H1',location:'app/(tabs)/_layout.tsx:6',message:'TabLayout mount',data:{tabs:['home','index','forms','actions','visual','shell','lists','more']},timestamp:Date.now()})}).catch(()=>{});
  // #endregion agent log
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' },
      }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="index" options={{ title: 'Playground' }} />
      <Tabs.Screen name="forms" options={{ title: 'Forms' }} />
      <Tabs.Screen name="actions" options={{ title: 'Actions' }} />
      <Tabs.Screen name="visual" options={{ title: 'Visual' }} />
      <Tabs.Screen name="shell" options={{ title: 'Layout' }} />
      <Tabs.Screen name="lists" options={{ title: 'Lists' }} />
      <Tabs.Screen name="more" options={{ title: 'More' }} />
    </Tabs>
  );
}
