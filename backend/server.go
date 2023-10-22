package main

import (
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
	
    // Define API routes here

    r.Run(":3000")
}
