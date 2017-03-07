# SchoolSpace

| HTTP | Path                   | Content                         | Notes                                                                          |
|------|------------------------|---------------------------------|--------------------------------------------------------------------------------|
| GET  | /                      | index.html                      | home                                                                           |
| GET  | /events                | events                          | renders list of upcoming events                                                |
| GET  | /venues                | available_venues                | renders list of available venues                                               |
| GET  | /available_venues/:id  | venue_listing                   | renders individual venue page                                                  |
| GET  | /request_venue         | request_venue_form              | renders eform application to request venue                                     |
| POST | /request_venue         | request_venue_form              | posts data from request form to DB                                             |
| GET  | /request_submitted     | request_submitted_notification  | sends notification to user and school admin that a request has been submitted  |
| GET  | /request_approved/:id  | request_approved_notification   | sends notification to user and school admin that the request has been approved |
| GET  | /request_declined/:id  | request_declined_notification   | sends notification to user and school admin that the request has been declined |
| GET  | /payment_info          | payment_info_page               | renders payment page                                                           |
| POST | /payment_info          | payment_info_page               | posts payment info                                                             |
| POST | /payment_confirmation  | payment_confirmation            | renders payment confirmation                                                   |
| GET  | /create_event          | create_event                    | renders create event page                                                      |
| POST | /create_event          | create_event                    | posts event data to DB                                                         |
| GET  | /create_venue          | create_venue                    | renders create new venue page                                                  |
| POST | /create_venue          | new_venue                       | posts new venue                                                                |
| POST | /new_user              | new_user                        | creates new user account                                                       |
| POST | /user/:id/payment_form | payment_form                    | posts payment info to DB                                                       |
| GET  | /user/:id              | user profile                    | renders users profile information                                              |
| PUT  | /user/edit/:id         | user profile update             | updates user profile                                                           |
| PUT  | /venue/edit/:id        | venue update                    | updates venue info                                                             |
| PUT  | /event/edit/:id        | event update                    | updates event info                                                             |


School creates profile
school logs in
school creates venue profile

user creates profile
user logs in
brings up list of avialable venues
selects venue
fills out application form
school approves application
user pays for space
user and school recieve confirmation
venue is confirmed
user creates event page

browse events in area