export class CachedWeatherService {
    getWeather(): Promise<Response> {
        let expiration = 10;
        let cachedData: any = localStorage.getItem('weatherService');
        let cachedTime: string | null = localStorage.getItem('weatherServiceCachedAt') ;
        if (cachedData !== null && cachedTime !== null) {
            let age = (Date.now() - parseInt(cachedTime)) / 1000;
            if (age < expiration) {
                return Promise.resolve(new Response(new Blob([cachedData])));
            } else {
                localStorage.removeItem('weatherService');
                localStorage.removeItem('weatherServiceCachedAt');
            }
        }
        return fetch(`weatherforecast`).then(resp => {
            resp.clone().text().then(
                content => {
                    localStorage.setItem('weatherService', content);
                    localStorage.setItem('weatherServiceCachedAt', Date.now().toString());
                }
            );
            
            return resp;
        });
    }

}