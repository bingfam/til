# MCP

## 가장 간단한 형태의 mcp

[https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/fastmcp/echo.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/fastmcp/echo.py)

```python
"""
FastMCP Echo Server
"""

from mcp.server.fastmcp import FastMCP

# Create server
mcp = FastMCP("Echo Server")


@mcp.tool()
def echo_tool(text: str) -> str:
    """Echo the input text"""
    return text


@mcp.resource("echo://static")
def echo_resource() -> str:
    return "Echo!"


@mcp.resource("echo://{text}")
def echo_template(text: str) -> str:
    """Echo the input text"""
    return f"Echo: {text}"


@mcp.prompt("echo")
def echo_prompt(text: str) -> str:
    return text
```

그런데 이거 막상 chainlit 에서 MCP 서버로 등록하려하면 에러는 나지 않는데 등록은 안된다. 맨 밑에 


```python
# 서버 실행
if __name__ == "__main__":
    print("Starting server...")
    mcp.run()
```    

이 들어가야 mcp 서버로 추가된다.

<br />

## MCP의 구조
[https://modelcontextprotocol.io/introduction#explore-mcp](https://modelcontextprotocol.io/introduction#explore-mcp)

### MCP primitive 3개

#### resources

#### prompts

#### tools


## MCP 상세 소개
[https://modelcontextprotocol.io/introduction](https://modelcontextprotocol.io/introduction)