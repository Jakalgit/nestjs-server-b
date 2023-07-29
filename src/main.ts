import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";


const start = async function() {
    try {
        const PORT = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)

        app.enableCors(
            {
                allowedHeaders: ['content-type'],
                origin: 'http://localhost:3000/book/all-books',
                credentials: true,
            }
        )

        await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()