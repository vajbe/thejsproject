import { Observable } from 'rxjs/Observable'

const observable = new Observable(observer => {
    setTimeout(()=> {
        observer.next("Hello From Observer...");
    },1000);
});

observable.subscribe(value => console.log(value));