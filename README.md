# Assignment One
## Purpose
The purpose of this assignment is to setup your GitHub and Heroku (or Rendor) instances for future assignments

You will create a Postman collection and create a REST test within the project. You will need to automate each test and include at least 1 assert for each request in the validation.

## Requirements
- Sign-up for a free GitHub account: https://github.com/ – Homework assignments will be stored on GitHub.
- Create an ECHO server (from lecture) 
- Setup Heroku (or Rendor) to autodeploy your application from your REPO CSC3916_HW1
- Create a PostMan request that posts a body value to your API 
    - Create an environment variable $echo_body for the body of the request
    - Asserts (test) must include
        - Validating string sent is what is returned  (use $echo_body to validate against the response sent back from the server)
        - Response status code (e.g. 200)
        - Response time < 200ms

## Submissions
- All source code should be stored on github (remember .gitignore for node_modules)
- API needs to be deployed to heroku
- Create a readme.md at the root of your github repository with the embedded (markdown) to your test collection
    - Within the collection click the (…), share collection -> Embed
    - Static Button
    - Click update link
    - Include your environment settings
    - Copy to clipboard 
- Submit the Url to canvas with the REPO CSC_3916
- Note: All tests should be testing against your Heroku or Rendor endpoint

## Rubic
- -5 - Not deployed to Heroku or Rendor
- -5 - Missing Postman Test
- -1 - For each missing assert (test)

## Resources
- http://nodejs.org
- http://www.passportjs.org/docs/basic-digest/
- https://devcenter.heroku.com/articles/heroku-cli 
- https://devcenter.heroku.com/articles/config-vars 
- https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction


[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/14301765-b42a3716-16d3-477c-828e-95ddf66e71bf?action=collection%2Ffork&collection-url=entityId%3D14301765-b42a3716-16d3-477c-828e-95ddf66e71bf%26entityType%3Dcollection%26workspaceId%3D0da1fa3f-46d4-416c-a12b-c5a2f00ba642#?env%5BASSIGNMENT1%5D=W3sia2V5IjoiZWNobyB2YXJpYWJsZSIsInZhbHVlIjoiaGVsbG8gd29ybGQxIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJoZWxsbyB3b3JsZDEiLCJzZXNzaW9uSW5kZXgiOjB9LHsia2V5IjoiZWNobyB2YXJpYWJsZSIsInZhbHVlIjoiaGVsbG8gd29ybGQyIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImFueSIsInNlc3Npb25WYWx1ZSI6ImhlbGxvIHdvcmxkMiIsInNlc3Npb25JbmRleCI6MX1d)