# SportSee

SportSee is a webapp created by OpenClassRoom. This is use at educationnal purpose only, so is not fully functionnal.
**Use the main branch only**

**__Recent add__**
You must use main branch
Cause it's an educationnal project, .env file has been include.
To use mocked data, pass the USE_MOCK_DATA to true into the env file.
To use the backend api data, pass the USE_MOCK_DATA to false into the env file.

## Installation
Create a folder :
```bash
mkdir "NewFolder"
```
Then go inside :
```bash
cd ./NewFolder
```
Now, you have to clone (or download) the repository :
```bash
# Clone
git clone https://github.com/mmdev73/SportSee.git
# OR download
wget https://github.com/mmdev73/SportSee/archive/refs/heads/main.zip
```
## Usage
### For backend (for master branch use only)
Go to the backend folder, instal dependencies and launch app
```bash
cd ./backend/
npm i
npm start
```
### To launch frontend
Go to the frontend folder, instal dependencies and launch app
```bash
cd ./frontend/
npm i
npm run dev
```
### To view user's dashboard
Use this url  : **http://localhost:***yourPort***/user/12** or **http://localhost:***yourPort***/user/18**
**In the case of using __mocked data__, only user 12 is available.**
**When using the __API__, users 12 and 18 are available.**
Any other url or url params should display a 404.
## Contributing

No contributing. This is an educational project for diploma validation
