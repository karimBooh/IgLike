import { AuthService } from '../../services/Auth/auth.service';
import { User } from '../../../../interfaces';
const authService = new AuthService();

export const onSubmit = async (data: unknown): Promise<void> => {
    const user = await authService.signUp(data as User);
    console.log(user);
};
