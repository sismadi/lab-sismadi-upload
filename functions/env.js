export async function onRequest(context) {
  return new Response(JSON.stringify({
    appName: context.env.PUBLIC_APP_NAME,
    version: context.env.PUBLIC_VERSION
  }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
