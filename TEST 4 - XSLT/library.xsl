<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/library">
  <html>
  <body style="padding: 5px">
  <h1>Library Books</h1>
    <xsl:for-each select="category">
        <h2>
            <xsl:value-of select="@name"/>
        </h2>
        <table style="border:1px solid black;border-collapse:collapse; width: 100%;">
        <tr bgcolor="#F2F2F2">
            <th style="border:1px solid black;padding: 12px">Title</th>
            <th style="border:1px solid black;padding: 12px">Author</th>
            <th style="border:1px solid black;padding: 12px">Year</th>
            <th style="border:1px solid black;padding: 12px">Rating</th>
        </tr>
        <xsl:for-each select="book">
        <tr>
            <td style="border:1px solid black;padding: 12px"><xsl:value-of select="title" /></td>
            <td style="border:1px solid black;padding: 12px"><xsl:value-of select="author" /></td>
            <td style="border:1px solid black;padding: 12px"><xsl:value-of select="year" /></td>
            <td style="border:1px solid black;padding: 12px"><xsl:value-of select="rating" /></td>
        </tr>
        </xsl:for-each>
        </table>
    </xsl:for-each>

  </body>
  </html>
</xsl:template>




</xsl:stylesheet>
