import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const LoginPage = () => {
  const supabase = useSupabaseClient();

  return (
    <div className="container">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "rgb(184,189,243)",
                brandAccent: "rgb(55,58,77)",
              },
            },
          },
        }}
        providers={["github"]}
      />
    </div>
  );
};

export default LoginPage;
