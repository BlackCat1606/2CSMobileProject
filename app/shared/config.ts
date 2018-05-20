export class Config {
  static isProdMode: boolean = false;
  static isTablet: boolean = false; // set in app.module.ts

  static DEBUG_MODE = {
    firstPage: "/"
  };
  
  //bdd local 
  //Vk5sdkIaq5fAnhepbrXOndqFtRscTXrVQWPUKX5bjAKsZAI4UJSpEKItNEoBJdsgECrVCHTCOohIozlsuugwnD3wKnRtYOtnZBJ14NGwZH4Ya6TnOpfSWbo5Bxvh4ybjI1385jHklEDfsqoSwLstQv792W7E6ENA3klObi4QrMExjbEPOJUbmUX5j6uwT36MM87zNIjXqOW6c3GKaXGANvQ9HOCaX2eNaDQtySq5iJv5dvUJgnQodrN7GYXVpxq
  ///opNVYEvjitkSyzZnnt9kcyUqlSbbI02UGgvUKTjhN70Y1E4n5FgkK93eynyoRFYOfHuGjE3DebFtYB77fzSGEcworjyp9TdEHEERxFaGLHotSAh3WaLC8JIGtp9uyFaF8nvLZdBywnIZXh2b2BV5GGUQltdKJvzAsskUotu6DE237LTsA0GFVCwcbZNKr1xxX3TcK3Dn7O4sjpMthqklShr8mopndJBK06IoCk0tXLRfJ4nLEgH37QhVvxtogGc
  public static access_token = "opNVYEvjitkSyzZnnt9kcyUqlSbbI02UGgvUKTjhN70Y1E4n5FgkK93eynyoRFYOfHuGjE3DebFtYB77fzSGEcworjyp9TdEHEERxFaGLHotSAh3WaLC8JIGtp9uyFaF8nvLZdBywnIZXh2b2BV5GGUQltdKJvzAsskUotu6DE237LTsA0GFVCwcbZNKr1xxX3TcK3Dn7O4sjpMthqklShr8mopndJBK06IoCk0tXLRfJ4nLEgH37QhVvxtogGc";
  public static refresh_token = "";

  public static oauthAddress = "http://192.168.42.254:8081"
  public static apiAddress = "http://192.168.42.254:8080"
  public static expiration: any;
}
