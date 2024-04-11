function Callback() {
   const link = window.location.href.slice();
   const code = window.location.href.slice(36);
   return (
      <>
         {link.includes("code") ? (
            <>
               <h1>Successful Callback</h1>
               <p>{code}</p>
            </>
         ) : (
            <>
               <h1>Unsuccessful Callback</h1>
               {link.includes("access_denied") ? <h1>You Denied Access</h1> : `\n`}
               <p>{code}</p>
            </>
         )}
      </>
   );
}
export default Callback;
