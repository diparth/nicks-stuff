import { Subscription } from 'rxjs';

export class Utils {
  public static UnsubscribeAll(subscriptions: Subscription[]): void {
    subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
