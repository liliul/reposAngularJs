interface IAuthenticator {
    authenticate (username: string, password: string): void;
}

class Authenticator implements IAuthenticator {
    authenticate(username: string, password: string): void {
        
    }
}

class GoogleAuthenticator implements IAuthenticator {
    authenticate(username: string, password: string): void {
        
    }
}

interface IUserRepository {
    saveAuthenticatedUser(username: string): void
}

class UserRepository implements IUserRepository {
    saveAuthenticatedUser(username: string): void {
        
    }
}

class AuthController {
    private authenticator: IAuthenticator
    private userRepository: IUserRepository

    constructor(authenticator: IAuthenticator, userRepository: IUserRepository) {
        this.authenticator = authenticator
        this.userRepository = userRepository
    }

    login (username: string, password: string) {
        if (this.authenticator(username, password)) {
            this.userRepository.saveAuthenticatedUser(username)
            return true
        } else return false
    }
}

const authenticator = new Authenticator()
const userRepository = new UserRepository()
const authController = new AuthController(authenticator, userRepository)